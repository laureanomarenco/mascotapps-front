import React, { useEffect } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
const encontradoIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664954719/marker1_mpxhq3.png",
  iconSize: [25, 25],
});
const perdidoIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664954719/marker2_ulne98.png",
  iconSize: [25, 25],
});
const adopcionIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664954719/marker3_obgzdo.png",
  iconSize: [25, 25],
});

const Maps = ({ cities }) => {
  useEffect(() => {}, [cities]);
  return (
    <div className="w-full md:w-1/2 h-full ">
      <MapContainer
        center={[-38.416097, -63.616672]}
        zoom={4}
        scrollWheelZoom={true}
        className="w-full md:w-9/6 h-[600px]  mx-auto "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Mascotapp</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities?.map((p, i) => {
          if (!isNaN(p.position[0])) {
            return (
              <Marker
                key={i}
                position={p.position}
                icon={
                  p.status === "encontrado"
                    ? encontradoIcon
                    : p.status === "perdido"
                    ? perdidoIcon
                    : adopcionIcon
                }
                className="m-2"
              >
                <Popup>
                  <div className="text-center h-[175px] ">
                    <img
                      src={
                        p.image
                          ? p.image
                          : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
                      }
                      alt="pet"
                      className="hover:cursor-pointer w-[150px] h-[120px] rounded-full mx-auto "
                      onClick={() => window.open(`/pets/${p.id}`)}
                    />

                    <h1 className="grid text-center text-[22px] font-semibold self">
                      {p.name}
                      <span
                        className={
                          p.status === "en adopción"
                            ? "capitalize text-[15px] text-purple-600"
                            : p.status === "encontrado"
                            ? "capitalize text-[15px] text-teal-600"
                            : "capitalize text-[15px] text-red-500"
                        }
                      >
                        {p.status}
                      </span>
                    </h1>
                    <span className="text-center">{p.city}</span>
                  </div>
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
