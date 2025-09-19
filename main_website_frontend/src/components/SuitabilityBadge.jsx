import WeatherIcon from "./WeatherIcon";

/**
 * PUBLIC_INTERFACE
 * SuitabilityBadge renders event suitability based on computed score.
 */
export default function SuitabilityBadge({ score, reason }) {
  let label = "Fair";
  let variant = "success";
  let icon = "sun";
  if (score >= 80) { label = "Excellent"; variant = "success"; icon = "sun"; }
  else if (score >= 60) { label = "Good"; variant = "success"; icon = "cloud"; }
  else if (score >= 40) { label = "Fair"; variant = "wind"; icon = "wind"; }
  else { label = "Poor"; variant = "error"; icon = "rain"; }

  return (
    <div className={`badge ${variant === "error" ? "badge-error" : "badge-success"}`}>
      <WeatherIcon name={icon} className="h-4 w-4" />
      <span>{label}</span>
      <span className="text-gray-500">·</span>
      <span className="text-gray-700">{reason}</span>
    </div>
  );
}
