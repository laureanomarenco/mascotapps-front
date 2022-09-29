import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import {GiShoppingBag} from "react-icons/gi"

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
        <span className="inline-block px-4 text-md py-1 rounded-lg font-medium bg-yellow-400">
          {points} points
        </span>

        <h5 className="mt-4 text-lg font-bold h-14 md:h-12">{title}</h5>

        <p className="mt-2 text-sm font-medium h-28 md:h-24 text-gray-600 lg:h-18">
          {description}
        </p>

        {selected ? (
          <button
            name="add"
            type="button"
            onClick={() => addTocarrito(itemCarrito)}
            className="flex rounded-lg items-center gap-3 justify-center w-full px-8 py-4 mt-4 bg-gray-500 "
          >
            <span className="text-sm text-white font-medium"> Quitar del carrito</span>

            <p className="text-white">

            <GiShoppingBag/>
</p>
          </button>
        ) : (
          <button
            name="add"
            type="button"
            onClick={() => addTocarrito(itemCarrito)}
            className="flex rounded-lg items-center gap-3 justify-center w-full px-8 py-4 mt-4 bg-yellow-500 "
          >
            <span className="text-sm font-medium"> Agregar al carrito</span>

            <GiShoppingBag/>
          </button>
        )}
      </div>
    </div>
  );
}
