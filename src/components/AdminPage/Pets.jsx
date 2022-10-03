import React from "react";
import Maps from "./Maps/Maps";
import Percents from "./Percents";
import { FaHands } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import { GiNestBirds } from "react-icons/gi";
import { GiSittingDog } from "react-icons/gi";
import { MdImageSearch } from "react-icons/md";
import { CgSearchFound } from "react-icons/cg";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// const Maps = React.lazy(() => import("./Maps/Maps"));
const Pets = () => {
  const location = useLocation();
  const pets = useSelector((state) => state.pets);
  // const petsForMaps = [...pets];
  const { cities } = location.state;
  return (
    <main className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          <h2 className="text-gray-600 ml-0.5">Panel de control Mascotapp</h2>
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
              {pets && pets.filter((p) => p.status === "en adopción").length}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.status === "en adopción").length *
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
              {pets ? pets.filter((p) => p.status === "adoptado").length : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.status === "adoptado").length * 100) /
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
              {pets ? pets.filter((p) => p.status === "perdido").length : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.status === "perdido").length * 100) /
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
                ? pets.filter((p) => p.status === "encontrado").length
                : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.status === "encontrado").length *
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
              {pets ? pets.filter((p) => p.specie === "gato").length : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.specie === "gato").length * 100) /
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
              {pets ? pets.filter((p) => p.specie === "perro").length : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.specie === "perro").length * 100) /
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
                ? pets.filter((p) => p.specie === "otra especie").length
                : null}
              <Percents
                value={
                  (
                    (pets.filter((p) => p.specie === "otra especie").length *
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
                {pets ? pets.filter((p) => p.gender === "hembra").length : null}
              </span>
              <span className="block text-gray-500">Hembras</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-blue-500">
                {pets ? pets.filter((p) => p.gender === "macho").length : null}
              </span>
              <span className="block text-gray-500">Machos</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Maps cities={cities} />
        {/* </Suspense> */}
      </section>
    </main>
  );
};

export default Pets;

//         <Percents
//           value={
//             (
//               (pets.filter((p) => p.gender === "macho").length * 100) /
//               pets.length
//             ).toFixed(2) + "%"
//           }
//         />
