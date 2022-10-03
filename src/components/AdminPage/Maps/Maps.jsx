import React, { useEffect } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { FaMapMarkerAlt } from "react-icons/fa";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

const locationIcon = new L.icon({
  iconUrl: icon,
  iconSize: [60, 55],
  iconAnchor: [22, 94],
  popupAnchor: [-3, 76],
});
const Maps = ({ cities }) => {
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
  // console.log(pets);
  // console.log(Number(cities[0].geo.lat.toFixed(3)));
  console.log(cities);
  // const petsMarkers = cities.map((c) => {
  //   return {
  //     id: c.id,
  //     lat: c.lat,
  //     lon: c.lon,
  //     name: c.name,
  //     city: c.city,
  //     image: c.image,
  //     specie: c.specie,
  //     status: c.status,
  //   };
  // });

  // console.log(petsMarkers);
  useEffect(() => {}, [cities]);
  return (
    <div>
      <MapContainer
        center={[cities[0].lat, cities[0].lon]}
        zoom={4}
        scrollWheelZoom={false}
        className="w-[800px] h-[600px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities?.map((m) => {
          <Marker key={m.id} position={[m.lat, m.lon]} icon={locationIcon}>
            <Popup>hola</Popup>
          </Marker>;
        })}
      </MapContainer>
    </div>
  );
};

export default Maps;
