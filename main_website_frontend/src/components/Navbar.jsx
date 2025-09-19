import { Link, NavLink } from "react-router-dom";
import WeatherIcon from "./WeatherIcon";

/**
 * PUBLIC_INTERFACE
 * Navbar renders the top navigation with brand and links.
 */
export default function Navbar() {
  return (
    <header className="bg-surface/90 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <WeatherIcon name="sun" className="text-primary h-6 w-6" />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            WeatherWise <span className="text-primary">Events</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/plan" className="nav-link">Plan</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/plan" className="btn btn-primary">Start Planning</Link>
        </div>
      </div>
    </header>
  );
}
