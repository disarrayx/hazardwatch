import type { LatLng, LocationEvent } from "leaflet";
import { LocateFixed } from "lucide-react";
import { useEffect, useState } from "react";
import { CircleMarker, useMap } from "react-leaflet";

import { Button } from "@/components/ui/button";

/**
 * "Find me" button (the arrow in the mockup). Asks the browser for the
 * user's location, centres the map on it and drops a blue dot.
 * Must be rendered inside <MapContainer> because it uses useMap().
 */
export default function LocateButton() {
  const map = useMap();
  const [position, setPosition] = useState<LatLng | null>(null);

  // Listen for the browser's answer to map.locate()
  useEffect(() => {
    const onFound = (e: LocationEvent) => setPosition(e.latlng);
    const onError = () =>
      window.alert("Couldn't get your location. Check your browser's location permission.");

    map.on("locationfound", onFound);
    map.on("locationerror", onError);
    return () => {
      map.off("locationfound", onFound);
      map.off("locationerror", onError);
    };
  }, [map]);

  return (
    <>
      {/* Sits under Leaflet's zoom buttons (top-left) */}
      <div className="absolute left-2.5 top-22 z-1000">
        <Button
          variant="outline"
          size="icon"
          aria-label="Show my location"
          className="size-8 bg-background shadow-md"
          onClick={() => map.locate({ setView: true, maxZoom: 16 })}
        >
          <LocateFixed className="size-4" />
        </Button>
      </div>

      {position && (
        <CircleMarker
          center={position}
          radius={8}
          pathOptions={{ color: "#3c7fa7", fillColor: "#3c7fa7", fillOpacity: 0.8 }}
        />
      )}
    </>
  );
}