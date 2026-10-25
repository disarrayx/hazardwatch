import { divIcon } from "leaflet";

/**
 * Orange teardrop pin, drawn as inline SVG so it follows the brand colour
 * (--primary in index.css) instead of Leaflet's fixed blue PNG.
 * The 25x41 size matches Leaflet's default pin, so the anchors below
 * (tip of the pin, popup and label positions) are unchanged.
 */
const PIN_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41" aria-hidden="true">
    <path
      d="M12.5 1C6.15 1 1 6.15 1 12.5 1 21 12.5 40 12.5 40S24 21 24 12.5C24 6.15 18.85 1 12.5 1z"
      style="fill: var(--primary)"
      stroke="#fff"
      stroke-width="2"
    />
    <circle cx="12.5" cy="12.5" r="4.5" fill="#fff" />
  </svg>
`;

export const beachMarkerIcon = divIcon({
  html: PIN_SVG,
  // Replaces Leaflet's default white square background on div icons
  className: "beach-pin",
  iconSize: [25, 41],
  iconAnchor: [12, 41], // tip of the pin
  popupAnchor: [1, -34], // popup opens just above the pin
  tooltipAnchor: [0, -34], // name label sits just above the pin
});