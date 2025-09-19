import clsx from "clsx";

/**
 * PUBLIC_INTERFACE
 * WeatherIcon renders simple SVG icons for common weather conditions.
 * name: "sun" | "cloud" | "rain" | "storm" | "snow" | "wind" | "thermo"
 */
export default function WeatherIcon({ name = "sun", className = "h-6 w-6" }) {
  const common = clsx("stroke-current", className);
  switch (name) {
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1" strokeWidth="1.8" />
        </svg>
      );
    case "rain":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M7 16h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1" strokeWidth="1.8" />
          <path d="M8 20l1-2M12 21l1-2M16 20l1-2" strokeWidth="1.8" />
        </svg>
      );
    case "storm":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M7 15h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1" strokeWidth="1.8" />
          <path d="M11 16l-2 4h3l-1 4 4-6h-3l2-2h-3z" strokeWidth="1.2" />
        </svg>
      );
    case "snow":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M12 3v18M4 8l16 8M4 16l16-8" strokeWidth="1.4" />
        </svg>
      );
    case "wind":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M3 8h10a2 2 0 1 0-2-2M3 16h14a2 2 0 1 1-2 2" strokeWidth="1.8" />
        </svg>
      );
    case "thermo":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <path d="M10 14a4 4 0 1 0 4 0V6a2 2 0 1 0-4 0v8z" strokeWidth="1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
          <circle cx="12" cy="12" r="4.5" strokeWidth="1.8" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" strokeWidth="1.4" />
        </svg>
      );
  }
}
