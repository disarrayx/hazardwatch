import "leaflet/dist/leaflet.css";
// Base styles for the cluster circles (positioning and animations)
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { latLngBounds } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import BeachCard from "@/components/BeachCard";
import LocateButton from "@/components/LocateButton";
import { beachMarkerIcon } from "@/lib/leafletIcon";
import type { Beach } from "@/types/beach";

/** Interactive OpenStreetMap with one pin per beach. Fills its parent's size. */
export default function BeachMap({ beaches }: { beaches: Beach[] }) {
  // Frame the map around all pins, so no centre/zoom is hardcoded
  const bounds = latLngBounds(
    beaches.map((beach) => [beach.lat, beach.lng] as [number, number]),
  );

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [48, 48] }}
      // Off so scrolling the page doesn't accidentally zoom the map
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        // Attribution is required by the OpenStreetMap licence
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Groups nearby pins into numbered circles; splits them as you zoom in */}
      <MarkerClusterGroup
        // Pins within this many screen pixels of each other get grouped.
        // Raise it to group more aggressively, lower it to group less.
        maxClusterRadius={60}
        // Stops the blue "area covered" outline appearing on cluster hover
        showCoverageOnHover={false}
        // Pins at the exact same spot fan out in a spiral when clicked
        spiderfyOnMaxZoom
        // Adds markers in batches so the page stays responsive
        chunkedLoading
      >
        {beaches.map((beach) => (
          <Marker
            key={beach.id}
            position={[beach.lat, beach.lng]}
            icon={beachMarkerIcon}
            // alt gives screen readers the beach name
            alt={beach.name}
          >
            {/* Always-visible name label above the pin */}
            <Tooltip permanent direction="top" className="beach-label">
              {beach.name}
            </Tooltip>

            <Popup
              className="hazard-popup"
              minWidth={240}
              maxWidth={320}
              // Taller cards scroll inside the popup instead of overflowing the map
              maxHeight={400}
              autoPanPadding={[16, 16]}
            >
              <BeachCard beach={beach} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <LocateButton />
    </MapContainer>
  );
}