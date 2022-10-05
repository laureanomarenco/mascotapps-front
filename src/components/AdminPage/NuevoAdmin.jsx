import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./Users";
import Pets from "./Pets";
import {
  fetchPets,
  getAllUsers,
  adminFetchUsers,
  totalVisitors,
  getDonations,
  usersPointsRank,
  usersAdoptionsRank,
  fetchCity,

  // pointsMultiplier
} from "../../store/actions/index";
import { HashLink as Link } from "react-router-hash-link";
import { FaDonate } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { MdHideImage } from "react-icons/md";
import { IoMdImage } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { TbView360 } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import Swal from "sweetalert2";

const NuevoAdmin = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.usersInfo);
  const pets = useSelector((state) => state.pets);
  const users = useSelector((state) => state.totalUsers);
  const donations = useSelector((state) => state.donations);
  const cities = useSelector((state) => state.cities);
  const [modalActive, setModalActive] = React.useState(false);

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

  //--------PARA EL MAPA---------------//
  var petsForMap = pets && { ...pets };
  // const citiesForMap = cities && { ...cities };

  var localidades = cities?.map((loc) => {
    return {
      lon: loc.centroide.lon,
      lat: loc.centroide.lat,
      nombre: loc.nombre,
      provincia: loc.provincia.nombre,
    };
  });

  var match = pets?.map((p) => {
    var prov = localidades.find(
      (l) =>
        l.nombre === p.city.split(", ")[0] &&
        l.provincia === p.city.split(", ")[1]
    );
    return {
      ...p,
      position: [Number(prov?.lat), Number(prov?.lon)],
    };
  });

  //--------PARA EL MAPA---------------//

  const usersPosts = (arr) => {
    let withPosts = arr?.filter(
      (u) =>
        u.foundAPet !== 0 || u.gaveUpForAdoption !== 0 || u.gotAPetBack !== 0
    ).length;
    let noPosts = arr.filter(
      (u) =>
        u.foundAPet === 0 && u.gaveUpForAdoption === 0 && u.gotAPetBack === 0
    ).length;
    return [withPosts, noPosts];
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
    dispatch(fetchCity());
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
    <div className="w-screen overflow-x-hidden">
      <div className="flex bg-gray-100 min-h-screen">
        <div className="flex-grow text-gray-800">
          {/* <aside className="fixed top-0 left-0 h-full z-50 flex flex-col"> */}
          <aside
            className={`translate-x-[${
              modalActive ? "0%" : "-100%"
            }] transition-transform fixed top-0 left-0 h-full z-50 flex flex-col`}
          >
            <div className="inline-flex items-center justify-center h-20 w-20 bg-yellow-400 hover:bg-teal-500 focus:bg-purple-500">
              <img
                src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
                alt="user profile photo"
                className="h-full w-full object-cover cursor-pointer"
                onClick={() => {
                  setModalActive(!modalActive);
                }}
              />
            </div>
            <div className="flex-grow flex flex-col justify-between text-gray-400 bg-gray-800">
              <nav className="flex flex-col mx-4 my-6 space-y-4stroke-linejoin">
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-3 text-gray-400 rounded-lg"
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
                  to="/admin/general#pets"
                  className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700  rounded-lg"
                  smooth
                >
                  <span className="sr-only">Mascotas</span>
                  <MdPets size={28} />
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
                  <span className="sr-only">Cerrar sesión</span>
                  <TbLogout size={28} onClick={handleClick} />
                </button>
              </div>
            </div>
          </aside>
          {/* <header className="flex items-center h-20 px-2 w-screen md:w-full sm:px-6 bg-red-200 box-border justify-between"> */}
          <header className="w-full flex items-center h-20 bg-white  justify-between px-2">
            <button
              className="relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full"
              onClick={() => setModalActive(true)}
            >
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
            {/* <div className="relative w-full max-w-md sm:-ml-2">
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
              </div> */}
            <div className="flex items-center">
              <div className="inline-flex items-center p-2  rounded-lg">
                <span className="sr-only">User Menu</span>
                <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">Admin</span>
                  <span className="text-sm text-gray-600">Mascotapp</span>
                </div>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2  rounded-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
                    alt="user profile photo"
                    className="h-full w-full object-cover"
                  />
                </span>
              </div>
              <div className="border-l pl-3 ml-3 space-x-1">
                {/* <button
                    className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
                    onClick={handleClick}
                  >
                    <span className="sr-only">Cerrar sesión</span>
                    <TbLogout size={28} />
                  </button> */}
              </div>
            </div>
          </header>
          {/* <main className="w-full box-border p-2 sm:p-10 space-y-6"> */}
          <main
            className={`w-screen box-border p-2 md:p-10 space-y-6 ${
              modalActive ? "ml-20" : ""
            } md:ml-12`}
          >
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">
                  Panel de control Mascotapp
                </h2>
              </div>
              <div className="flex flex-wrap items-start justify-end -mb-3"></div>
            </div>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 w-[95vw] md:w-[90vw]">
              <div className="flex items-center p-8 bg-white w-[95vw] md:w-auto shadow rounded-lg">
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
              <div className="flex items-center p-8 bg-white w-[95vw] md:w-auto shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <TbUsers
                    className="mx-auto h-1/2 fill-green-600"
                    size={100}
                  />
                </div>
                <div>
                  <span className="block text-2xl font-bold">{`${usersss.length}`}</span>
                  <span className="block text-gray-500">
                    Usuarios registrados
                  </span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white w-[95vw] md:w-auto shadow rounded-lg">
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
              <div className="flex items-center p-8 bg-white w-[95vw] md:w-auto shadow rounded-lg">
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
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg w-screen md:w-full">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Listado de usuarios registrados en tu aplicación
                </div>
                <div className="p-4 ">
                  <div className=" w-full bg-white border-2 border-gray-200 border-dashed rounded-md">
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
                        <li
                          className="flex items-center w-[80vw] md:w-full"
                          key={u.id}
                        >
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
                        <li className="flex items-center w-[80vw]" key={u.id}>
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
            <Pets pets={petsForMap} cities={match} tokenAccess={tokenAccess} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default NuevoAdmin;
