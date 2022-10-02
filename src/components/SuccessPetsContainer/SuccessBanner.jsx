import { Link } from "react-router-dom";
import React from "react";

export default function SuccessBanner() {
  return (
    <div className="w-full  my-16 min-h-[500px] bg-[#FFC700] md:min-h-[300px] flex flex-col md:flex-row py-5 md:py-0 md:justify-center px-5 pt-6 items-baseline relative">
      <div className="flex flex-col gap-2 text-black md:self-center text-center items-center ">
        <p className="font-bold text-4xl  mb-3">Finales felices</p>
        <p>
          Acá podes ver todos los casos de mascotas encontradas y adoptadas.
        </p>
        <p>Conocé y mirá todos los casos.</p>
        <Link
          to="/success"
          className="px-6 py-2 text-black bg-white hover:bg-white/70 w-fit font-bold rounded-md my-5"
        >
          Ver casos
        </Link>
      </div>
      <div className="absolute w-64 h-72 bottom-0 right-2">
        <img
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664655908/mascotapps/cute-smiley-dog-wearing-sunglasses-removebg-preview_vuczkc.png"
          alt=""
        />
      </div>
      <div className="hidden lg:block lg:absolute lg:w-64 lg:h-72 bottom-0 left-2">
        <img
          className="h-full w-full object-cover object-right"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664658103/mascotapps/4564654654_qrkroq.png"
          alt=""
        />
      </div>
    </div>
  );
}
