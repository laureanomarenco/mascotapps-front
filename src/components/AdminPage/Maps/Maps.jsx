import React, { useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { FaMapMarkerAlt } from "react-icons/fa";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 25],
});

const Maps = ({ cities }) => {
  console.log(cities);
  useEffect(() => {}, [cities]);
  return (
    <div>
      <MapContainer
        center={cities[0].position}
        zoom={4}
        scrollWheelZoom={false}
        className="w-[800px] h-[600px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((m) => {
          <Marker position={m.position} icon={markerIcon}>
            <Popup>
              <img src={m.image} alt="img" />
              <h3>{m.name}</h3>
              <p>{m.city}</p>
            </Popup>
          </Marker>;
        })}
        ;
      </MapContainer>
    </div>
  );
};

export default Maps;
