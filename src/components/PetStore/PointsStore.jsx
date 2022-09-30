import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ItemCollection from "./ItemCollection";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function PointsStore() {
  const { user, isAuthenticated } = useAuth0();
  var carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const [carrito, setCarrito] = useState(carritoStorage);
  console.log(
    "🚀 ~ file: PointsStore.jsx ~ line 14 ~ PointsStore ~ carrito",
    carrito
  );
  const [update, setUpdate] = useState("");
  const userPoints = 250;
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  if (isAuthenticated) {
    return (
      <div className="flex flex-col w-full items-center">
        <Navbar />

        <ItemCollection
          user={user}
          setCarrito={setCarrito}
          carrito={carrito}
          userPoints={userPoints}
          setUpdate={setUpdate}
          update={update}
        />

        <Footer />
      </div>
    );
  } else {
    Swal.fire({
      title: "No estás logueado",
      text: "Debes iniciar sesión para ver tu perfil.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#28B0A2",
      cancelButtonColor: "#B0B0B0",
      cancelButtonText: "Ir a inicio",
      confirmButtonText: "Iniciar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      } else {
        window.location.href = "/home";
      }
    });
  }
}
