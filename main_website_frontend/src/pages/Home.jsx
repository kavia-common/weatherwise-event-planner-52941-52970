import Hero from "../components/Hero";
import ForecastGrid from "../components/ForecastGrid";

/**
 * PUBLIC_INTERFACE
 * Home page with hero and sample forecast.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">This Week's Outlook</h2>
            <a href="/plan" className="btn btn-primary">Plan Your Event</a>
          </div>
          <ForecastGrid city="New York" />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-4">
          <Feature title="Real-time Weather" desc="Live data from OpenWeatherMap keeps your plans up to date." />
          <Feature title="Suitability Scores" desc="Clear indicators tell you how the weather fits your event." />
          <Feature title="Easy Booking" desc="Request a quote and book in minutes with our simple form." />
        </div>
      </section>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="card p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
