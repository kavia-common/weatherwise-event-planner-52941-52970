import { useState } from "react";
import ForecastGrid from "./ForecastGrid";
import SuitabilityBadge from "./SuitabilityBadge";
import useWeather from "../services/useWeather";

/**
 * PUBLIC_INTERFACE
 * Planner provides interactive planning tools to evaluate suitability and proceed to booking.
 */
export default function Planner() {
  const [city, setCity] = useState("New York");
  const [eventType, setEventType] = useState("outdoor");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data } = useWeather(city);

  const day = data?.daily?.[selectedIndex];

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">City</label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Event Type</label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="outdoor">Outdoor</option>
              <option value="indoor">Indoor</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className="md:col-span-2 flex items-end">
            <a href="#booking" className="btn btn-primary">Book this event</a>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">5-day Forecast</h3>
        <ForecastGrid city={city} />
      </div>

      {day && (
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">{day.label}</div>
              <div className="text-xl font-semibold">{Math.round(day.temp)}°C</div>
            </div>
            <SuitabilityBadge score={day.suitability.score} reason={day.suitability.reason} />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">Select day</label>
            <div className="flex gap-2 overflow-auto">
              {(data?.daily || []).slice(0,5).map((d, i) => (
                <button
                  key={d.date}
                  onClick={() => setSelectedIndex(i)}
                  className={`px-3 py-2 rounded-lg border text-sm ${i === selectedIndex ? "bg-primary text-white border-primary" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
