import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPets,
  getAllUsers,
  adminFetchUsers,
  totalVisitors,
  getDonations,
  usersPointsRank,
  usersAdoptionsRank,
  // pointsMultiplier
} from "../../store/actions/index";
import { FaDonate } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { MdHideImage } from "react-icons/md";
import { IoMdImage } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { TbView360 } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";

import Users from "./Users";
import { Link } from "react-router-dom";

const NuevoAdmin = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.usersInfo);
  const pets = useSelector((state) => state.pets);
  const users = useSelector((state) => state.totalUsers);
  const donations = useSelector((state) => state.donations);
  const tokenAccess = localStorage.getItem("token");
  // const pointsRank = useSelector((state) => state.adoptionsRank);
  const adoptionsRank = useSelector((state) => state.adoptionsRank);
  const orderAdoptions = adoptionsRank?.sort(
    (a, b) => b.gaveUpForAdoption - a.gaveUpForAdoption
  );
  const visitors = useSelector((state) => state.visitors);
  const amounts = donations.map((done) => done.amount);
  const totalDonationsInCents = amounts.reduce((prev, next) => prev + next, 0);
  const usersss = usersDetails;
  // foundAPet: 0

  // gaveUpForAdoption: 0

  // gotAPetBack: 0
  console.log(usersDetails);

  const usersPosts = (arr) => {
    if (arr.length > 0) {
      let withPosts = arr?.filter(
        (u) =>
          u.foundAPet !== 0 || u.gaveUpForAdoption !== 0 || u.gotAPetBack !== 0
      ).length;
      let noPosts = arr?.filter(
        (u) =>
          u.foundAPet === 0 && u.gaveUpForAdoption === 0 && u.gotAPetBack === 0
      ).length;
      return [withPosts, noPosts];
    }
  };

  let usersPostsOrNo = usersPosts(usersss);

  useEffect(() => {
    dispatch(fetchPets());
    dispatch(getDonations());
    dispatch(getAllUsers());
    dispatch(adminFetchUsers(tokenAccess));
    dispatch(totalVisitors());
    dispatch(usersPointsRank());
    dispatch(usersAdoptionsRank());
    usersPostsOrNo = usersPosts(usersss);
  }, [dispatch, visitors, users]);

  //------------//CERRAR SESION//------------------//
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
  //-------------------------------------------------------
  return (
    <div>
      <div className="flex bg-gray-100 min-h-screen">
        <aside className="hidden sm:flex sm:flex-col">
          <a
            href="#"
            className="inline-flex items-center justify-center h-20 w-20 bg-yellow-400 hover:bg-teal-500 focus:bg-purple-500"
          >
            <img
              src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
              alt="user profile photo"
              className="h-full w-full object-cover"
            />
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4stroke-linejoin">
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Folders</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span className="sr-only">Dashboard</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
              <Link
                to="/admin/general/pets"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Mascotas</span>
                <MdPets />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Documents</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>
        <div className="flex-grow text-gray-800">
          <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
            <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
              <span className="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <div className="relative w-full max-w-md sm:-ml-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                role="search"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
              />
            </div>
            <div className="flex flex-shrink-0 items-center ml-auto">
              <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <span className="sr-only">User Menu</span>
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">Admin</span>
                  <span className="text-sm text-gray-600">Mascotapps</span>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2  rounded-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
                    alt="user profile photo"
                    className="h-full w-full object-cover"
                  />
                </span>
              </button>
              <div className="border-l pl-3 ml-3 space-x-1">
                <button
                  className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
                  onClick={handleClick}
                >
                  <span className="sr-only">Cerrar sesión</span>
                  <TbLogout size={28} />
                </button>
              </div>
            </div>
          </header>
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">
                  Panel de control Mascotapp
                </h2>
              </div>
              <div className="flex flex-wrap items-start justify-end -mb-3"></div>
            </div>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-yellow-100 rounded-full mr-6">
                  <MdPets
                    className="mx-auto h-1/2 fill-yellow-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">
                    {pets.length}
                  </span>
                  <span className="block text-gray-500">
                    Mascotas publicadas
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <TbUsers
                    className="mx-auto h-1/2 fill-green-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">{`${users}`}</span>
                  <span className="block text-gray-500">
                    Usuarios registrados
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <FaDonate className="mx-auto h-1/2 fill-red-600" size={100} />
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">
                    ${totalDonationsInCents / 100}
                  </span>
                  <span className="inline-block text-xl text-gray-500 font-semibold"></span>
                  <span className="block text-gray-500">en Donaciones</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <TbView360
                    className="mx-auto h-1/2 stroke-blue-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">{`${visitors}`}</span>
                  <span className="block text-gray-500">Visitas</span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  The number of applied and left students per month
                </div>
                <div className="p-4 ">
                  <div className=" w-full bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                    <Users users={usersss} />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <IoMdImage
                    className="mx-auto h-1/2 fill-yellow-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">
                    {usersPostsOrNo && usersPostsOrNo[0]}
                  </span>
                  <span className="block text-gray-500">
                    Usuarios con publicaciones
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <MdHideImage
                    className="mx-auto h-1/2 fill-teal-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">
                    {usersPostsOrNo && usersPostsOrNo[1]}
                  </span>
                  <span className="block text-gray-500">
                    Usuarios sin publicaciones
                  </span>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Usuarios con mayor puntaje</span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="p-6 space-y-6">
                    {adoptionsRank?.map((u) => {
                      return (
                        <li className="flex items-center" key={u.id}>
                          <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                            <img
                              src={u.image}
                              alt="Annette Watson profile picture"
                            />
                          </div>
                          <span className="text-gray-600">
                            {u.name ? u.name : "Usuario"}
                          </span>
                          <span className="ml-auto font-semibold">
                            {u.points}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Usuarios con más mascotas dadas en adopción</span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="p-6 space-y-6">
                    {orderAdoptions?.map((u) => {
                      return (
                        <li className="flex items-center" key={u.id}>
                          <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                            <img
                              src={u.image}
                              alt="Annette Watson profile picture"
                            />
                          </div>
                          <span className="text-gray-600">
                            {u.name ? u.name : "Usuario"}
                          </span>
                          <span className="ml-auto font-semibold">
                            {u.gaveUpForAdoption}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
            <section className="text-right font-semibold text-gray-500">
              <a href="#" className="text-purple-600 hover:underline">
                Recreated on Codepen
              </a>{" "}
              with{" "}
              <a
                href="https://tailwindcss.com/"
                className="text-teal-400 hover:underline"
              >
                Tailwind CSS
              </a>{" "}
              by Azri Kahar,{" "}
              <a
                href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard"
                className="text-purple-600 hover:underline"
              >
                original design
              </a>{" "}
              made by Chili Labs
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NuevoAdmin;
