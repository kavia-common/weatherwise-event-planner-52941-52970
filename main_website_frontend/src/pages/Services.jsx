import WeatherIcon from "../components/WeatherIcon";

/**
 * PUBLIC_INTERFACE
 * Services page describing offerings.
 */
export default function Services() {
  const services = [
    { title: "Weather Advisory", desc: "Custom reports for your event date and location.", icon: "thermo" },
    { title: "On-site Coordination", desc: "Setup timing optimized for weather windows.", icon: "wind" },
    { title: "Backup Planning", desc: "Contingency plans for rain, wind, or heat.", icon: "rain" }
  ];

  return (
    <section className="section">
      <div className="container space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Our Services</h1>
          <p className="text-gray-600 mt-2">Professional planning with weather-aware strategies.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(s => (
            <div key={s.title} className="card p-4">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <WeatherIcon name={s.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mt-3">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
