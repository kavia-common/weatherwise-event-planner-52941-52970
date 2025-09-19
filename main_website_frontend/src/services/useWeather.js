import useSWR from "swr";
import { format, addDays } from "date-fns";

/**
 * PUBLIC_INTERFACE
 * useWeather fetches current and forecast data from OpenWeatherMap and normalizes for UI.
 * Requires env var: REACT_APP_OPENWEATHER_API_KEY (will be provided by deployment).
 */
export default function useWeather(city = "New York") {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data: geo } = useSWR(
    apiKey ? `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}` : null,
    fetcher
  );

  const lat = geo?.[0]?.lat;
  const lon = geo?.[0]?.lon;

  const { data, error } = useSWR(
    lat && lon && apiKey
      ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      : null,
    fetcher
  );

  const normalized = normalizeForecast(data);

  return {
    data: normalized,
    isLoading: !data && !error,
    error
  };
}

function normalizeForecast(data) {
  if (!data?.list) return null;

  // Aggregate 3-hour steps into day buckets (simple average)
  const days = [];
  for (let i = 0; i < 5; i++) {
    const target = addDays(new Date(), i);
    const dayStr = format(target, "yyyy-MM-dd");
    const entries = data.list.filter((e) => e.dt_txt.startsWith(dayStr));
    if (entries.length === 0) continue;
    const temp = avg(entries.map((e) => e.main.temp));
    const wind = avg(entries.map((e) => e.wind.speed));
    const rain = sum(entries.map((e) => (e.rain?.["3h"] || 0))) || 0;
    const main = top(entries.map((e) => e.weather?.[0]?.main || "Clear"));
    const condition = (main || "Clear").toLowerCase();

    const suitability = computeSuitability({ temp, wind, rain, condition });

    days.push({
      date: dayStr,
      label: format(target, "EEE d"),
      temp,
      wind,
      rain,
      condition,
      suitability
    });
  }

  return { daily: days };
}

function computeSuitability({ temp, wind, rain, condition }) {
  // Simple scoring model suitable for outdoor events
  let score = 100;

  // Temperature penalty
  if (temp < 10) score -= (10 - temp) * 2;
  if (temp > 28) score -= (temp - 28) * 2;

  // Wind penalty
  if (wind > 20) score -= (wind - 20) * 2;

  // Rain penalty
  if (rain > 2) score -= Math.min(40, rain * 4);

  // Condition penalty
  if (["thunderstorm", "snow"].includes(condition)) score -= 30;
  if (["rain", "drizzle"].includes(condition)) score -= 20;

  score = Math.max(0, Math.min(100, Math.round(score)));

  let reason = "Comfortable";
  if (score >= 80) reason = "Great for outdoor events";
  else if (score >= 60) reason = "Good conditions";
  else if (score >= 40) reason = "Consider backup plan";
  else reason = "Not recommended";

  return { score, reason };
}

const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const top = (arr) => {
  const map = {};
  arr.forEach((v) => (map[v] = (map[v] || 0) + 1));
  return Object.entries(map).sort((a, b) => b[1] - a[1])[0]?.[0];
};
