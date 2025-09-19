import { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Contact page with simple inquiry form.
 */
export default function Contact() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      });
      setStatus("success");
      setMsg("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <p className="text-gray-600 mt-2">Have questions? Send us a message.</p>
        <form onSubmit={submit} className="card p-4 mt-4">
          <label className="block text-sm text-gray-600 mb-1">Message</label>
          <textarea
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <div className="mt-3 flex items-center gap-3">
            <button className="btn btn-primary" disabled={status === "loading"}>Send</button>
            {status === "success" && <span className="badge badge-success">Sent!</span>}
            {status === "error" && <span className="badge badge-error">Failed to send</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
