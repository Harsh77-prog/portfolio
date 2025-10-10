import "../App.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

// Custom avatar image
const avatarUrl = "logo.svg";

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
const myCoordinates = [30.8606954, 75.8569916];
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

  const colors = {
    heading: isDark ? "text-yellow-200" : "text-black",
    text: isDark ? "text-yellow-200" : "text-gray-800",
    cardBg: isDark ? "bg-black" : "bg-gradient-to-r from-gray-100 to-gray-300",
    cardShadow: isDark
      ? "shadow-[0_0_25px_#FFD700]/40"
      : "shadow-[0_0_25px_#000]/30",
    hoverShadow: isDark
      ? "hover:shadow-[0_0_35px_#FFD700]"
      : "hover:shadow-[0_0_35px_#000]",
  };

  return (
    <div
      className={`rounded-2xl w-full md:w-[90%] mx-auto p-4 ${colors.cardBg} ${colors.cardShadow} transition-all duration-300 ${colors.hoverShadow}`}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${colors.heading} drop-shadow-lg text-center`}
      >
        ✦ My Real Location
      </motion.h1>

      {/* Location Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`mb-4 text-center ${colors.text}`}
      >
        {locationText}
      </motion.p>

      {/* Map */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[350px] rounded-2xl overflow-hidden"
      >
        <MapContainer
          center={myCoordinates}
          zoom={mapZoomLevel}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={myCoordinates} icon={customIcon}>
            <Popup className={isDark ? "text-yellow-200" : "text-black"}>
              I am here! 📍
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
}

LocationMap.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
