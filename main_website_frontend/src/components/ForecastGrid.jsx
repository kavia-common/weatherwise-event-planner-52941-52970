import useWeather from "../services/useWeather";
import SuitabilityBadge from "./SuitabilityBadge";

/**
 * PUBLIC_INTERFACE
 * ForecastGrid shows a 5-day forecast with suitability indicator.
 */
export default function ForecastGrid({ city }) {
  const { data, isLoading, error } = useWeather(city);

  if (isLoading) return <div className="text-sm text-gray-600">Loading forecast…</div>;
  if (error) return <div className="text-sm text-error">Failed to load weather.</div>;
  if (!data) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {data.daily.slice(0, 5).map((day) => (
        <div key={day.date} className="card p-4">
          <div className="text-sm text-gray-500">{day.label}</div>
          <div className="mt-1 text-lg font-semibold">{Math.round(day.temp)}°C</div>
          <div className="mt-1 text-sm text-gray-600 capitalize">{day.condition}</div>
          <div className="mt-3">
            <SuitabilityBadge score={day.suitability.score} reason={day.suitability.reason} />
          </div>
        </div>
      ))}
    </div>
  );
}
