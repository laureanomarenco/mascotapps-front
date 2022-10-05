import React, { useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { FaMapMarkerAlt } from "react-icons/fa";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 25],
  popupAnchor: [3, -46],
});

const Maps = ({ cities }) => {
  useEffect(() => {}, [cities]);
  return (
    <div>
      <MapContainer
        center={[-38.416097, -63.616672]}
        zoom={4}
        scrollWheelZoom={false}
        className="w-[800px] h-[600px] rounded"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities?.map((p, i) => {
          if (!isNaN(p.position[0])) {
            return (
              <Marker key={i} position={p.position} icon={markerIcon}>
                <Popup>
                  <div className="flex gap-2 items-center p-0 w-9/12">
                    <img
                      src={p.image}
                      alt="pet"
                      className="rounded w-9/12"
                      onClick={() => window.open(`/pets/${p.id}`)}
                    />

                    <h1 className="font-bold text-xl capitalize">{p.name}</h1>
                  </div>
                  <span>{p.city}</span>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>
    </div>
  );
};

export default Maps;
