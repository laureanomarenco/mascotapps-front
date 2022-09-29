import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Item({
  image,
  title,
  points,
  description,
  setCarrito,
  carrito,
}) {
  const itemCarrito = {
    title: title,
    points: points,
  };
  //eslint-disable-next-line

  const [selected, setSelected] = useState(false);

  const addTocarrito = (item) => {
    if (!selected) {
      setCarrito([...carrito, item]);
      setSelected(true);
      Swal.fire({
        icon: "success",
        title: "Agregado al carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        title: "Eliminado",
        text: "Eliminado del carrito",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1000,
      });
      const newItem = carrito.filter((fav) => fav.title !== title);
      setCarrito(newItem);
      setSelected(false);
    }
  };
  useEffect(() => {
    //verificar si el item ya esta en el carrito
    if (carrito.filter((e) => e.title === title).length > 0) {
      setSelected(true);
    }
  }, [carrito, title]);

  return (
    <div className="w-full h-[530px]">
      <img alt={title} src={image} className="object-contain w-full h-56 " />

      <div className="p-6 h-[306px] lg:h-[242px]">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
          {points} points
        </span>

        <h5 className="mt-4 text-lg font-bold h-14 lg:h-8">{title}</h5>

        <p className="mt-2 text-sm font-medium h-28 md:h-24 text-gray-600 lg:h-18">
          {description}
        </p>

        {selected ? (
          <button
            name="add"
            type="button"
            onClick={() => addTocarrito(itemCarrito)}
            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-gray-500 rounded-sm"
          >
            <span className="text-sm font-medium"> Quitar del carrito</span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        ) : (
          <button
            name="add"
            type="button"
            onClick={() => addTocarrito(itemCarrito)}
            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span className="text-sm font-medium"> Agregar al carrito</span>

            <svg
              className="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
