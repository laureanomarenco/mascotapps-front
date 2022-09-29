import React from "react";
import { FaShoppingCart } from "react-icons/fa";
export default function Cart({ carrito }) {
  return (
    <div className="absolute top-8 right-5 text-teal-600 text-xl flex  items-center">
      { carrito.length}<FaShoppingCart />
    </div>
  );
}
