import React from "react";

import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FavContainer() {
  var corazon = JSON.parse(localStorage.getItem("favoritos")) || [];
  const navigate = useNavigate();

  const alertNoFav = () => {
    Swal.fire({
      title: "No tenes ningún favorito",
      text: "Podes agregar favoritos y luego verlos acá",
      icon: "info",
      confirmButtonText: "Ok",
    }).then(() => navigate("/home"));
  };
  if (corazon.length === 0) {
    alertNoFav();
  }
  return (
    <div className="min-h-[100vh]">
      <Navbar />

      <div className="grid gap-1 grid-cols-1 gird-rows-2 min-h-[70vh] md:grid-cols-2 xl:gird-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        {corazon.map((pet) => (
          <Card key={pet.id} data={pet} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
