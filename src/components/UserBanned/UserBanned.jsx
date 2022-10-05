import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Error = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <section className="flex flex-col  items-center md:w-[1000px]">
        <img
          className="h-70 mx-auto"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664928676/selective-focus-of-black-and-white-adorable-cat-with-its-tongue-out-removebg-preview_bfse9c.png"
          alt="logo"
        />
        <div className=" flex flex-col items-center w-full text-center px-8" >
          <h2 className="uppercase  text-3xl  md:text-7xl font-bold text-center text-[#a3223e] mb-12">
            Usuario baneado!
          </h2>
          <p className=" mx-auto font-medium mb-14 text-[#2D334A] px-5 text-md md:text-2xl">
            Este usuario ya no puede interactuar más en Mascotapp. Si crees que
            esto es un error, por favor contactanos a través de nuestro
            <Link to="/query" className="font-bold text-teal-500">
              {" "}
              formulario{" "}
            </Link>
            de contacto. Gracias!
          </p>
        </div>
        <div className=" font-bold text-center ml-auto w-full md:w-max rounded">
          <Button path="/home" text="Ir al inicio"/>
        </div>
      </section>
    </div>
  );
};

export default Error;
