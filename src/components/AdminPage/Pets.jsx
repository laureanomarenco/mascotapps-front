import React, { useEffect } from "react";
// import Maps from "./Maps/Maps";

import { fetchPets, deletePost } from "../../store/actions/index";
import Percents from "./Percents";
import { FaHands } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import { GiNestBirds } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { MdImageSearch } from "react-icons/md";
import { CgSearchFound } from "react-icons/cg";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

// const Maps = React.lazy(() => import("./Maps/Maps"));
const Pets = (/*{ cities }*/ { tokenAccess }) => {
  const pets = useSelector((state) => state.pets);
  const dispatch = useDispatch();
  const ultraSecreta = "SoyAdmin";

  const handleClick = (id) => {
    return Swal.fire({
      title: "¿Eliminar posteo?",
      text: "Ingresa tu contraseña confirmar",
      html: `<input type="password" id="password" className="swal2-input" placeholder="Password">`,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#28B0A2",
      focusConfirm: false,
      preConfirm: () => {
        const password = Swal.getPopup().querySelector("#password").value;
        if (!password) {
          Swal.showValidationMessage(`Ingresa tu contraseña`);
        } else if (password !== ultraSecreta) {
          Swal.showValidationMessage(`Contraseña incorrecta`);
        }
        return { password: password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deletePost({ petId: id, password: ultraSecreta }, tokenAccess)
        );
        dispatch(fetchPets(tokenAccess));

        Swal.fire({
          title: "Usuario eliminado correctamente!",
          icon: "success",
          confirmButtonColor: "#28B0A2",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchPets(tokenAccess));
  }, [pets]);

  return (
    <main id="pets" className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2 ">Mascotas</h1>
          <h2 className="text-gray-600 ml-0.5">
            Estadísticas de las mascotas publicadas
          </h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3"></div>
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600  rounded-full mr-6">
            <FaHands className="mx-auto h-1/2 fill-yellow-600" size={100} />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets && pets?.filter((p) => p.status === "en adopción").length}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.status === "en adopción").length *
                      100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>

            <span className="block text-gray-500">en Adopción</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600  rounded-full mr-6">
            <GiDogHouse className="mx-auto h-1/2 fill-yellow-600" size={100} />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets
                ? pets?.filter((p) => p.status === "adoptado").length
                : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.status === "adoptado").length *
                      100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>
            <span className="block text-gray-500">Adoptadas</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 rounded-full mr-6">
            <MdImageSearch
              className="mx-auto h-1/2 fill-yellow-600"
              size={100}
            />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets ? pets?.filter((p) => p.status === "perdido").length : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.status === "perdido").length * 100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>

            <span className="block text-gray-500">Perdidas</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600  rounded-full mr-6">
            <CgSearchFound
              className="mx-auto h-1/2 stroke-yellow-600"
              size={100}
            />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets
                ? pets?.filter((p) => p.status === "encontrado").length
                : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.status === "encontrado").length *
                      100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>
            <span className="block text-gray-500">Encontradas</span>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100  rounded-full mr-6">
            <GiCat className="mx-auto h-1/2 fill-green-600" size={100} />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets ? pets?.filter((p) => p.specie === "gato").length : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.specie === "gato").length * 100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>
            <span className="block text-gray-500">Gatos</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <GiSittingDog className="mx-auto h-1/2 fill-green-600" size={100} />
          </div>
          <div>
            <span className="block flex gap-2 text-2xl font-bold">
              {pets ? pets?.filter((p) => p.specie === "perro").length : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.specie === "perro").length * 100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>
            <span className="block text-gray-500">Perros</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-green-100 rounded-full mr-6">
            <GiNestBirds className="mx-auto h-1/2 fill-green-600" size={100} />
          </div>
          <div>
            <span className="inline-block flex gap-2 text-2xl font-bold">
              {pets
                ? pets?.filter((p) => p.specie === "otra especie").length
                : null}
              <Percents
                value={
                  (
                    (pets?.filter((p) => p.specie === "otra especie").length *
                      100) /
                    pets.length
                  ).toFixed(2) + "%"
                }
              />
            </span>
            <span className="block text-gray-500">Otra especie</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-gradient-to-tr from-blue-500 via-pink-100 to-pink-600  rounded-full mr-6">
            <BsGenderAmbiguous
              className="mx-auto h-1/2 stroke-blue-600"
              size={100}
            />
          </div>
          <div className="flex gap-4">
            <div>
              <span className="block text-2xl font-bold text-pink-500">
                {pets
                  ? pets?.filter((p) => p.gender === "hembra").length
                  : null}
              </span>
              <span className="block text-gray-500">Hembras</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-blue-500">
                {pets ? pets?.filter((p) => p.gender === "macho").length : null}
              </span>
              <span className="block text-gray-500">Machos</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full  max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Usuarios registrados
                </h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-scroll">
            <table className="items-center bg-white w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Nombre
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Ciudad
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Estado
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>
                {pets?.map((p) => {
                  return (
                    <tr key={p.id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 text-left text-blueGray-700 flex items-center gap-1">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={p.image}
                          alt="user-img"
                        />
                        <div className="grid ">
                          <span className="w-full">{p.name}</span>
                          <span className="w-full text-gray-500 font-medium">
                            {p.email}
                          </span>
                        </div>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 ">
                        {p.city}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs  p-4">
                        {p.status}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs  p-4">
                        <button
                          className="text-red-500 flex  items-center gap-1"
                          onClick={() => handleClick(p.id)}
                        >
                          <FaTrashAlt />
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <Maps cities={cities} /> */}
        {/* </Suspense> */}
      </section>
    </main>
  );
};

export default Pets;

//         <Percents
//           value={
//             (
//               (pets?.filter((p) => p.gender === "macho").length * 100) /
//               pets.length
//             ).toFixed(2) + "%"
//           }
//         />
