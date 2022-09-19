import React from "react";
import Swal from "sweetalert2";
import { ImStatsDots } from "react-icons/im";
import { TbUsers } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { MdPets } from "react-icons/md";

const NavBar = () => {
  const handleClick = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Estás cerrando sesión como administrador.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28B0A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Hasta pronto!",
          confirmButtonColor: "#28B0A2",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/");
          }
        });
      }
    });
  };

  return (
    <header className="bg-gray-100">
      <nav className="bg-gray-100 text-[#28B0A2] ">
        <div className="container mx-auto py-4 grid grid-cols-1 justify-items-center md:flex md:justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-300">Admin Dashboard</h1>
          <div className="flex space-x-10">
            <a
              className="flex items-center space-x-2 hover:cursor-pointer"
              href="#general"
            >
              <span>
                <ImStatsDots size={20} />
              </span>
              <span className="text-gray-500 hover:text-[#28B0A2]">
                General
              </span>
            </a>
            <a
              className="flex items-center space-x-2 hover:cursor-pointer"
              href="#mascotas"
            >
              <span>
                <MdPets size={20} />
              </span>
              <span className="text-gray-500  hover:text-[#28B0A2]">
                Mascotas
              </span>
            </a>
            <a
              className="flex items-center space-x-2 hover:cursor-pointer"
              href="#usuarios"
            >
              <span>
                <TbUsers size={20} />
              </span>
              <span className="text-gray-500  hover:text-[#28B0A2]">
                Usuarios
              </span>
            </a>
          </div>
          <a
            className="flex  mt-2 hover:scale-y-100 items-center space-x-2 bg-transparent py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-white hover:cursor-pointer"
            onClick={handleClick}
          >
            <span>
              <AiOutlineLogout size={20} />
            </span>
            <span className="text-gray-500 ">Cerrar sesión</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
