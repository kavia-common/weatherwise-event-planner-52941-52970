import { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * BookingForm collects user details and desired event info.
 * Note: This submits to the assumed event_data_db REST endpoint.
 */
export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    eventType: "outdoor",
    notes: ""
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Submitting..." });
    try {
      // Replace with actual base URL via env if available
      const res = await fetch(`/api/events/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus({ state: "success", message: "Booking submitted! We'll be in touch shortly." });
      setForm({ name: "", email: "", phone: "", city: "", date: "", eventType: "outdoor", notes: "" });
    } catch (err) {
      setStatus({ state: "error", message: "Error submitting booking. Please try again." });
    }
  };

  return (
    <form onSubmit={submit} className="card p-4" id="booking">
      <h3 className="font-semibold text-lg">Book Your Event</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-3">
        <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
        <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} required />
        <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
        <Field label="City" name="city" value={form.city} onChange={onChange} required />
        <Field label="Desired Date" type="date" name="date" value={form.date} onChange={onChange} required />
        <Select
          label="Event Type"
          name="eventType"
          value={form.eventType}
          onChange={onChange}
          options={[
            { value: "outdoor", label: "Outdoor" },
            { value: "indoor", label: "Indoor" },
            { value: "mixed", label: "Mixed" }
          ]}
        />
        <TextArea className="md:col-span-2" label="Notes" name="notes" value={form.notes} onChange={onChange} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button className="btn btn-primary" type="submit" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Submitting..." : "Submit Booking"}
        </button>
        {status.state === "success" && <span className="badge badge-success">{status.message}</span>}
        {status.state === "error" && <span className="badge badge-error">{status.message}</span>}
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type={type}
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function TextArea({ label, name, value, onChange, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
        rows={4}
      />
    </div>
  );
}
