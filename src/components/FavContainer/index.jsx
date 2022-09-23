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
    let timerInterval;
    Swal.fire({
      title: "No tienes favoritos!",
      html: "Puedes entrar al detalle de una mascota y agregarla a favoritos",
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate("/home");
      }
    });
  };
  if (corazon.length === 0) {
    //sweet alert
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
