import '../App.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Your custom avatar image
const avatarUrl = "logo.svg";

// Fixing Leaflet marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// ✅ Your fixed coordinates (GNDEC as example)
const myCoordinates = [30.8606954,75.8569916];
const mapZoomLevel = 16; // Zoomed in nicely

// Custom avatar icon for marker
const customIcon = new L.Icon({
  iconUrl: avatarUrl,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

export default function LocationMap() {
  const [locationText, setLocationText] = useState("Loading location...");

  useEffect(() => {
    const [lat, lon] = myCoordinates;

    // Reverse Geocoding to get address from coordinates
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
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

  return (
    <div className="rounded-2xl shadow-xl w-full md:w-[90%] mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white"
      >
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          ✦ My Real Location
        </span>
      </motion.h1>

      <p className="text-gray-400 mb-4">
        {locationText}
      </p>

      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden z-0">
        <MapContainer
          center={myCoordinates}
          zoom={mapZoomLevel}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={myCoordinates} icon={customIcon}>
            <Popup>I am here! 📍</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
