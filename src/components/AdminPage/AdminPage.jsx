import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/actions/index";
import SideMenu from "./NavBar";

// import Alert from './Alert';
//icons

import { MdPets } from "react-icons/md";
import { FaHands } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import { GiNestBirds } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { MdImageSearch } from "react-icons/md";
import { CgSearchFound } from "react-icons/cg";
import { BsEyeFill } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { MdImageNotSupported } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { TbView360 } from "react-icons/tb";
import { AiOutlineWoman } from "react-icons/ai";
import { AiOutlineMan } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";

const AdminPage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  console.log(pets);
  return (
    <>
      <div className="top-0 sticky z-10">
        <SideMenu />
      </div>
      <div
        id="general"
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <img
          className="mx-auto h-40 w-auto"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
          alt="Your Company"

        />
        <p className="text-gray-500 text-center text-gray-700 md:text-lg">
          Supervisa las estadísticas de tu aplicación
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 ">
          <a className="hover:cursor-pointer" href="#mascotas">
            <div className="text-center md:border-r h-80 hover:scale-y-110">
              <MdPets className="mx-auto h-1/2 fill-yellow-600" size={100} />
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-800">
                {pets ? pets.length : null}
              </h6>
              <p className="text-sm font-medium tracking-widest text-yellow-600 uppercase lg:text-yellow-600">
                Mascotas publicadas
              </p>
            </div>
          </a>

          <a className="hover:cursor-pointer" href="#usuarios">
            <div className="text-center md:border-r h-80 hover:scale-y-110">
              <TbUsers className="mx-auto h-1/2 stroke-yellow-600" size={100} />
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-800">
                136
              </h6>
              <p className="text-sm font-medium tracking-widest text-yellow-600 uppercase lg:text-yellow-600">
                Usuarios registrados
              </p>
            </div>
          </a>

          <a className="hover:cursor-pointer" href="#don-visits">
            <div className="text-center md:border-r h-80 hover:scale-y-110">
              <FaDonate className="mx-auto h-1/2 fill-yellow-600" size={100} />
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-800">
                4.5K
              </h6>
              <p className="text-sm font-medium tracking-widest text-yellow-600 uppercase lg:text-yellow-600">
                Donaciones
              </p>
            </div>
          </a>

          <a className="hover:cursor-pointer" href="#don-visits">
            <div className="text-center md:border-r h-80 hover:scale-y-110">
              <TbView360
                className="mx-auto h-1/2 stroke-yellow-600"
                size={100}
              />
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gray-800">
                7533
              </h6>
              <p className="text-sm font-medium tracking-widest text-yellow-600 uppercase lg:text-yellow-600">
                Visitas a tu app
              </p>
            </div>
          </a>
        </div>
      </div>
      <div id="mascotas"></div>

      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-4 xl:grid-cols-4 gap-4 mt-28 w-9/12 mx-auto ">
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <FaHands size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets
                ? pets.filter((p) => p.status === "en adopción").length
                : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Mascotas en adopción
            </h2>
          </div>
        </div>

        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <GiDogHouse size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.status === "adoptado").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Mascotas adoptadas
            </h2>
          </div>

        </div>
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <MdImageSearch size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.status === "perdido").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Mascotas perdidas
            </h2>

          </div>
        </div>
        <div className="flex justify-center w-full py-6">
          <CgSearchFound size={50} color="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets
                ? pets.filter((p) => p.status === "encontrado").length
                : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Mascotas encontradas
            </h2>
          </div>
        </div>
      </section>

      <section
        id="mascotas"
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-2 w-9/12 mx-auto "
      >
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <GiCat size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.specie === "gato").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Gatos
            </h2>
          </div>
        </div>

        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <GiSittingDog size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.specie === "perro").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Perros
            </h2>
          </div>
        </div>
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <GiNestBirds size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets
                ? pets.filter((p) => p.specie === "otra especie").length
                : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Otras especies
            </h2>
          </div>
        </div>
      </section>

      <section
        id="mascotas"
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-2 w-9/12 mx-auto "
      >
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <AiOutlineWoman size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.gender === "hembra").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Hembras
            </h2>
          </div>
        </div>

        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <AiOutlineMan size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.filter((p) => p.gender === "macho").length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Machos
            </h2>
          </div>
        </div>
      </section>

      <section
        id="usuarios"
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-28 w-9/12 mx-auto "
      >
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <BsImages size={50} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? pets.length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Usuarios con publicaciones
            </h2>
          </div>
        </div>

        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <MdImageNotSupported size={72} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets ? 136 - pets.length : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Usuarios sin publicaciones
            </h2>
          </div>
        </div>
      </section>

      <section
        id="don-visits"
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-28 w-9/12 mx-auto "
      >
        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <BiDonateHeart size={72} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              {pets
                ? pets.filter((p) => p.status === "en adopción").length
                : null}
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Donaciones recibidas
            </h2>
          </div>
        </div>

        <div className="flex justify-center w-full lg:border-r border-yellow-500 py-6">
          <BsEyeFill size={72} fill="#28B0A2" />
          <div className="text-gray-800 w-1/2 pl-12">
            <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
              7533
            </h1>
            <h2 className="text-gray-500 lg:text-lg mt-4 leading-8 tracking-wide">
              Visitas
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
