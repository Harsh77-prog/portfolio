import "../App.css";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

// Custom avatar image
const avatarUrl = "HarshImage.png";

// Fix Leaflet marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Your coordinates
const myCoordinates = [30.85835, 75.86031];
const mapZoomLevel = 16;

// Custom avatar icon for marker
const customIcon = new L.Icon({
  iconUrl: avatarUrl,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export default function LocationMap({ isDark }) {
  const [locationText, setLocationText] = useState("Loading location...");
  const [showMap, setShowMap] = useState(false);
  const [perfLite, setPerfLite] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const [lat, lon] = myCoordinates;

    // Reverse Geocoding
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.display_name) {
          setLocationText(data.display_name);
        } else {
          setLocationText("Unknown Location");
        }
      })
      .catch((err) => {
        console.error("Reverse geocoding error:", err);
        setLocationText("Unable to fetch location");
      });
  }, []);

  useEffect(() => {
    setPerfLite(document.documentElement.classList.contains("perf-lite"));
  }, []);

  useEffect(() => {
    if (perfLite) return;
    const node = mapRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShowMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [perfLite]);

  return (
    <div
      className="fx-panel map-panel w-full md:w-[90%] mx-auto p-5 sm:p-8"
    >
      <div className="fx-ring" />
      <div className="map-glow" />
      <div className="map-grid" />

      <RevealGroup as="div" className="text-center">
        <RevealItem as="h1" className="fx-title map-title" variant="tilt">
          Location Beacon
        </RevealItem>
        <RevealItem as="p" className="fx-subtitle mt-2" variant="glide">
          Live Coordinates
        </RevealItem>
      </RevealGroup>

      {/* Location Text */}
      <Reveal as="p" duration={1} delay={0.2} className="map-location-text" variant="soft">
        {locationText}
      </Reveal>

      <div className="map-hud">
        <div className="map-hud-chip">Lat: {myCoordinates[0]}</div>
        <div className="map-hud-chip">Lon: {myCoordinates[1]}</div>
        <div className="map-hud-chip">Zoom: {mapZoomLevel}</div>
      </div>

      {/* Map */}
      <Reveal as="div" className="map-frame" duration={0.8} variant="glide">
        <div ref={mapRef} className="map-frame-inner">
          <div className="map-frame-ring" />
          <div className="map-scanline" />
          <div className="map-overlay" />
          {showMap && !perfLite ? (
            <MapContainer
              center={myCoordinates}
              zoom={mapZoomLevel}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={myCoordinates} icon={customIcon}>
                <Popup className={isDark ? "text-sky-200" : "text-black"}>
                  I am here! 📍
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div className="map-placeholder">
              <p>{perfLite ? "Map disabled for smoothness" : "Loading map..."}</p>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}

LocationMap.propTypes = {
  isDark: PropTypes.bool.isRequired,
};







