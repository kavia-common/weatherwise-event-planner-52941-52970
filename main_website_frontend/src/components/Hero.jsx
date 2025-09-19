import { Link } from "react-router-dom";
import WeatherIcon from "./WeatherIcon";

/**
 * PUBLIC_INTERFACE
 * Hero section for homepage.
 */
export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-ocean-start to-ocean-end">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
            <WeatherIcon name="sun" className="h-4 w-4" />
            Plan smarter with live weather insights
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4">
            WeatherWise Events
          </h1>
          <p className="text-gray-600 mt-4">
            Make confident event decisions with real-time weather, forecast suitability,
            and interactive planning tools—all in one place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/plan" className="btn btn-primary">Start Planning</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="grid grid-cols-2 gap-4">
            <Metric title="Today" value="Sunny" icon="sun" color="text-primary" />
            <Metric title="Wind" value="8 km/h" icon="wind" color="text-blue-500" />
            <Metric title="Rain chance" value="10%" icon="rain" color="text-emerald-600" />
            <Metric title="Feels like" value="23°C" icon="thermo" color="text-amber-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ title, value, icon, color }) {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-subtle">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <WeatherIcon name={icon} className={`h-4 w-4 ${color}`} />
        {title}
      </div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}
