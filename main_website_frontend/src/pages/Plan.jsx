import Planner from "../components/Planner";
import BookingForm from "../components/BookingForm";

/**
 * PUBLIC_INTERFACE
 * Plan page: interactive planner and booking form.
 */
export default function Plan() {
  return (
    <section className="section">
      <div className="container space-y-8">
        <div>
          <h1 className="text-2xl font-semibold">Plan Your Event</h1>
          <p className="text-gray-600 mt-2">Evaluate the forecast and submit your booking request.</p>
        </div>
        <Planner />
        <BookingForm />
      </div>
    </section>
  );
}
