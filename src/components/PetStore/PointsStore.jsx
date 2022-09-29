import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ItemCollection from "./ItemCollection";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";

export default function PointsStore() {
  const { user } = useAuth0();
  var carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const [carrito, setCarrito] = useState(carritoStorage);
  const userPoints = 250;
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />

      <ItemCollection
        user={user}
        setCarrito={setCarrito}
        carrito={carrito}
        userPoints={userPoints}
      />

      <Footer />
    </div>
  );
}
