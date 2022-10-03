import React from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const locationIcon = new L.icon({
  iconUrl: icon,
  iconSize: [22, 22],
  iconAnchor: [22, 94],
  popupAnchor: [22, 94],
});

const Maps = ({ pets, cities }) => {
  //OBJ CIUDADES, PROV y LAT-LONG
  // let localidades = cities?.map((loc) => {
  //   return {
  //     geo: loc.centroide,
  //     nombre: loc.nombre,
  //     provincia: loc.provincia.nombre,
  //   };
  // });

  // const match = pets?.map((p) => {
  //   var prov = localidades.find(
  //     (l) =>
  //       l.nombre === p.city.split(", ")[0] &&
  //       l.provincia === p.city.split(", ")[1]
  //   );
  //   return {
  //     p,
  //     ...prov,
  //   };
  // });
  // console.log("MAAAAATCH", match);
  // let prueba = match?.geo.lat;
  // console.log(prueba);
  console.log(pets);
  // console.log(Number(cities[0].geo.lat.toFixed(3)));
  console.log(cities);
  return (
    <div>
      <MapContainer
        center={[-38.419, -63.598]}
        zoom={4}
        scrollWheelZoom={false}
        className="w-[800px] h-[600px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities?.map((p) => {
          <Marker position={[-38.419, -63.598]} icon={locationIcon}>
            <Popup>
              <img src="" alt="pet" />
              <h3>{p.name}</h3>
              <span>ciudad</span>
            </Popup>
          </Marker>;
        })}
        ;
      </MapContainer>
    </div>
  );
};

export default Maps;
