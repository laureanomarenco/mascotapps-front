import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getDetail,
  resetDetail,
  publicUserDetail,
} from "../../store/actions/index";
import Fav from "../FavContainer/Fav";
import { BiArrowBack } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { FaPaw } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import UserContact from "./UserContact";
import PetComments from "./PetComments";
import { TbVaccine } from "react-icons/tb";
import { BiMap } from "react-icons/bi";
import { BsExclamationSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import EndPost from "./EndPost";
import Chat from "./Chat/Chat";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.pet);
  const loading = useSelector((state) => state.isLoading);
  const userContact = useSelector((state) => state.publicUserDetail);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [hidden, setHidden] = useState(true);
  const [hiddenEnd, setHiddenEnd] = useState(true);

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(publicUserDetail(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [id, isAuthenticated]);
  const { image } = pet;

  const handleClick = () => {
    setHidden(!hidden);
  };
  // const handleClickEnd = () => {
  //   setHiddenEnd(!hiddenEnd);
  // };

  const handleBack = () => {
    dispatch(resetDetail());
  };

  return (
    <div className="flex flex-col justify-center content-center items-center min-h-screen w-full mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-4 flex flex-col px-3 w-full lg:w-10/12">
          <div className="flex content-center self-start px-8">
            <Link
              to="/home"
              type="button"
              className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              onClick={handleBack}
            >
              <BiArrowBack />
              Volver
            </Link>
          </div>
          {pet ? (
            <div className="my-7 grid sm:grid-cols-2 sm:gap-6 sm:justify-center mx-auto sm:content-center font-sans ">
              {/* imagenes */}
              <div className="w-[320px]  lg:w-[500px] mx-auto ">
                <div className="h-[280px] md:h-96 md:w-96 rounded-lg overflow-hidden mx-auto drop-shadow-md">
                  <img
                    src={
                      image
                        ? image
                        : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
                    }
                    className="w-full h-full object-cover"
                    alt={pet.name}
                  />
                </div>
                <div className=" grid w-full grid-cols-3 gap-2 md:w-96 h-32 mx-auto my-3">
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={
                        image
                          ? image
                          : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
                      }
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={
                        image
                          ? image
                          : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
                      }
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                  <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                    <img
                      src={
                        image
                          ? image
                          : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
                      }
                      className="w-full h-full object-cover "
                      alt={pet.name}
                    />
                  </div>
                </div>
              </div>
              {/* datos */}
              <div className="text-justify flex flex-col  w-full h-full gap-2 px-10 py-3 mt-3 ">
                <h1 className="text-5xl mb-5 text-teal-600 capitalize font-bold flex gap-3 items-center">
                  <FaPaw />
                  {pet.name}
                </h1>
                <div className="relative">
                  <div className="absolute flex items-center text-md text-teal-600 right-1 top-1">
                    <Fav pet={pet} />{" "}
                  </div>
                  <div className="flex gap-3">
                    <p className="text-xl font-bold items-center  text-teal-700 ">
                      <BsExclamationSquare />
                    </p>
                    <p className="capitalize text-gray-600">{pet.status}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xl font-bold text-teal-700">Resumen</p>
                  <p className=" text-gray-600 break-words">{pet.comments}</p>
                </div>
                {/* linea */}
                <div className="h-px bg-teal-800 "></div>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-xl font-bold text-teal-700">Sexo</p>
                    <p className="capitalize text-gray-600">{pet.gender}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold  text-teal-700">Especie</p>
                    <p className="capitalize text-gray-600">{pet.specie}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-teal-700">Raza</p>
                    <p className="capitalize text-gray-600">{pet.race}</p>
                  </div>
                </div>
                {/* linea */}
                <div className="h-px bg-teal-800"></div>
                <div className="flex gap-3">
                  <p className="text-xl font-bold text-teal-700">
                    <TbVaccine />
                  </p>
                  <p className="capitalize  text-gray-600">
                    {pet.vaccinationSchemeStatus}
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="text-xl font-bold text-teal-700">
                    <BiMap />
                  </p>
                  <p className="capitalize  text-gray-600">
                    {pet.city ? pet.city : "No especificado"}
                  </p>
                </div>

                {!isLoading &&
                isAuthenticated &&
                !userContact.error &&
                user?.sub !== pet.UserId ? (
                  <>
                    <div className="my-3">
                      <button
                        onClick={handleClick}
                        className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-6 "
                      >
                        <span>
                          <MdContactMail size={22} />
                        </span>

                        <span className="text-sm font-medium">
                          Información de Contacto
                        </span>
                      </button>
                      <div>
                        <div hidden={hidden} className="w-fit">
                          <UserContact
                            user={userContact}
                            hidden={hidden}
                            setHidden={setHidden}
                            idPet={id}
                          />
                        </div>
                      </div>
                      {pet.status === "perdido" && (
                        <div className=" flex gap-5 mt-4 w-full max-w-[500px] justify-between">
                          <div>
                            <p className="mr-8 sm:mr-0 text-sm text-gray-500 w-3/4">
                              ¿Has visto esta mascota?
                            </p>
                            <p className="mr-8 sm:mr-0 text-sm text-gray-500 w-3/4">
                              Envíale información al anunciante a través de
                              nuestro Chat
                            </p>
                          </div>
                          <div className="">
                            <Chat pet={pet} />
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : null}
                {/* finalizar publicacion */}
                {user?.sub === pet.UserId && (
                  //agregar condicion para que no renderice el boton si el status de la mascota es 'cancelado' o 'concretado'
                  pet.postStatus === 'activo' ?
                  (
                  <div>
                    <button
                      onClick={()=>setHidden(false)}
                      className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-6 "
                    >
                      Dar por concretada la publicación
                    </button>
                    <div hidden={false} className="w-full">
                      <EndPost
                        user={userContact}
                        hiddenEnd={hiddenEnd}
                        setHiddenEnd={setHiddenEnd}
                        idPet={id}
                      />
                    </div>
                  </div>
                ) : pet.postStatus === 'cancelado' ? <p className="text-xl font-bold text-red-700">Has cancelado esta publicación</p>
                  : <p className="text-xl font-bold text-teal-700">Has concretado esta publicación</p> 
                )}
              </div>
              {/* chat etc */}
              <div className="text-justify flex flex-col sm:col-span-2 w-full h-full gap-2 px-8 py-3 mt-3">
                {pet.status === "perdido" && (
                  <div className="text-justify flex flex-col  bg-white">
                    <div className="my-8 bg-white p-3 border-t-4 border-[#FFC700] relative">
                      <p className="text-xl font-bold text-gray-700 ">
                        Comentarios sobre {pet.name}
                      </p>
                    </div>
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 ">
                      <PetComments petId={pet.id} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <h1>Oops! Esta mascota ya no está mas en la lista</h1>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
