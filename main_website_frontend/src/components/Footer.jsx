import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Footer shows site copyright and quick links.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="container py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold">WeatherWise Events</h3>
          <p className="text-sm text-gray-600 mt-2">
            Plan with confidence. Real-time weather insights for perfect events.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/plan">Plan</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm text-gray-600 mt-2">info@weatherwise.events</p>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} WeatherWise Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
