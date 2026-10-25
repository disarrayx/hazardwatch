import { Link } from "react-router-dom";

/** HazardWatch wordmark: "Hazard" in orange, "Watch" in blue. Links home. */
export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="HazardWatch home"
      className="font-logo text-3xl font-semibold tracking-tight md:text-4xl"
    >
      <span className="text-primary">Hazard</span>
      <span className="text-secondary">Watch</span>
    </Link>
  );
}