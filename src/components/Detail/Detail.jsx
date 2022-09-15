import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { getDetail, resetDetail } from "../../store/actions/index";
import Fav from "../Fav";
import { BiArrowBack } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.pet);
  const loading = useSelector((state) => state.isLoading);
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [id]);
  return (
    <div className="flex flex-col justify-center content-center items-center min-h-screen w-full mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-4 flex flex-col">
          <div className="flex content-center self-start">
            <Link
              to="/home"
              type="button"
              className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
            >
              <BiArrowBack />
              Volver
            </Link>
          </div>
          {pet ? (
            <div className="my-7 grid sm:grid-cols-2 sm:gap-6 sm:justify-center mx-auto sm:content-center font-sans">
              <div className="w-full  mx-auto">
                <div className="md:h-96 md:w-96 rounded-lg overflow-hidden mx-auto drop-shadow-md">
                  <img
                    src={pet.image}
                    className="w-full h-full object-cover"
                    alt={pet.name}
                  />
                </div>
                <div className=" grid w-full  grid-cols-3 gap-1 md:w-96 h-32 mx-auto my-3">
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={pet.image}
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={pet.image}
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={pet.image}
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                </div>
              </div>
              <div className="text-justify flex flex-col  w-full h-full gap-5 px-10 py-3 ">
                <h1 className="text-5xl  text-teal-600 uppercase flex gap-3 items-center">
                  <FaPaw />
                  {pet.name}
                </h1>
                  <div className="relative">
                    {/* favorito */}
                  <div className="absolute flex items-center text-teal-600 right-1 top-1"><Fav pet={pet} /> </div>
                  <p className="text-xl flex font-bold items-center gap-2 text-teal-800 ">
                    {" "}
                    Estado
                  </p>
                  <p className="capitalize text-teal-900">{pet.status}</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-teal-800">Resumen</p>
                  <p className=" text-teal-900 break-words">{pet.comments}</p>
                </div>
                {/* linea */}
                <div className="h-px bg-teal-800 "></div>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-xl font-bold text-teal-800">Sexo</p>
                    <p className="capitalize text-teal-900">{pet.gender}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold  text-teal-800">Especie</p>
                    <p className="capitalize text-teal-900">{pet.specie}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-teal-800">Raza</p>
                    <p className="capitalize text-teal-900">{pet.race}</p>
                  </div>
                </div>
                {/* linea */}
                <div className="h-px bg-teal-800"></div>
                <div>
                  <p className="text-xl font-bold text-teal-800">Vacunación</p>
                  <p className="capitalize  text-teal-900">
                    {pet.vaccinationSchemeStatus}
                  </p>
                </div>
                <p className="capitalize text-xl font-bold text-teal-600">
                  Contacto
                </p>
              </div>
            </div>
          ) : (
            <h1>No Existe ese perro</h1>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
