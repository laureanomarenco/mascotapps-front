import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Reviews from "../UserProfile/Transactions/Reviews";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { beginTransaction } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { BiDonateHeart } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdPets } from "react-icons/md";

import Modal from "../Modal/Modal";

export default function UserPuserProfsPublicProfile() {
  const tokenAccess = localStorage.getItem("token");
  const { user } = useAuth0();
  const location = useLocation();
  const { userProf, idPet } = location.state;
  const myProfile = useSelector((state) => state.myProfile);
  const transactionAlready = myProfile?.transactions?.find(
    (t) => t.pet_id === idPet
  )?.user_demanding_check;

  //eslint-disable-next-line
  const reviews = useSelector((state) => state.userReviews);

  const [activeDonateModal, setActiveDonateModal] = useState(false);
  const [activeAdopterModal, setActiveAdopterModal] = useState(false);
  const [activeFounderModal, setActiveFounderModal] = useState(false);
  const dispatch = useDispatch();
  const [contact, setContact] = useState(false);

  function handleBeginTransaction() {
    setContact(true);
    dispatch(beginTransaction(idPet, tokenAccess));
  }

  if (!userProf?.name) {
    return (
      <>
        <Navbar />
        <Spinner />
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <Navbar />

        <div className=" py-8  md:px-20  rounded-sm drop-shadow-md">
          {/* perfil */}
          <div className="grid md:grid-cols-2 gap-2 items-center justify-center content-center w-full px-4  max-h-fit md:pb-12 bg-white p-3  max-w-screen-xl mx-auto">
            <div className="md:col-span-3 h-36 text-center flex content-center items-center justify-center">
              <p className="text-4xl font-semibold uppercase text-[#28B0A2]">
                Perfil de {userProf?.name}
              </p>
              {userProf?.linkToDonate && (
                <a
                  href={userProf.linkToDonate}
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img
                    className="h-12 w-12 ml-2 object-cover"
                    src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664901593/mascotapps/Logo-Mercado-Pago-fondocrema-removebg-preview_xccsdw.png"
                    alt=""
                  />
                </a>
              )}
            </div>
            <div className="w-full mx-auto relative border-t-4 border-[#FFC700] p-3 max-w-[370px]">
              <div className="flex absolute flex-col gap-3 transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl">
                {userProf?.gaveUpForAdoption > 0 && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveAdopterModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl"
                    >
                      <MdPets />
                    </button>
                  </div>
                )}
                {activeAdopterModal && (
                  <Modal
                    title="¡Este usuario ha dado mascotas en adopción!"
                    body=" Este usaurio tiene esta insignia porque ha dado
                              mascotas en adopción satisfactoriamente, para
                              nosotros es una alegría siempre que esto sucede
                              porque es uno de los motores que nos llevó a
                              desarrollar esta página. Tanto las mascotas y
                              personas que este usuario ha ayudado, como todo el
                              equipo de Mascotapp, le agradecen profundamente."
                    setShow={setActiveAdopterModal}
                  />
                )}
                {userProf?.foundAPet > 0 && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveFounderModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl"
                    >
                      <GiTrophyCup />
                    </button>
                  </div>
                )}
                {activeFounderModal && (
                  <Modal
                    title="¡Este usuario ha ayudado a recuperar una mascota
                              perdida!"
                    body="Este usuario tiene esta insignia porque ha
                              encontrado y devuelto a su dueño una mascota
                              extraviada, ¡esto es importantísimo! y es el
                              motivo principal por el que decidimos desarrollar
                              esta página ya que tener perdido a un amigo peludo
                              es una de las cosas más feas que nos puede pasar.
                              Por eso agradecemos con esta insignia en nombre
                              del dueño, de la mascota y de todo el equipo de
                              Mascotapp."
                    setShow={setActiveFounderModal}
                  />
                )}

                {userProf?.isDonator === "true" && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveDonateModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl"
                    >
                      <BiDonateHeart />
                    </button>
                  </div>
                )}
                {activeDonateModal && (
                  <Modal
                    title="¡Este usuario ha ayudado económicamente a
                              Mascotapp!"
                    body=" Este usuario tiene esta insignia porque ha
                              decidido ayudarnos haciendo una donación. Además
                              de la satisfacción que nos produce ayudar a
                              conectar mascotas con sus dueños Mascotapp
                              necesita sostener su economía, y al ser un página
                              de acceso completamente gratuito ayudas como estas
                              son importantisimas para nosotros. ¡Por eso
                              agradecemos enormemente a miembros de la comunidad
                              como este usuario!"
                    setShow={setActiveDonateModal}
                  />
                )}
              </div>
              <img
                className="w-52 h-52 rounded-full overflow-hidden mx-auto object-cover object-center"
                src={
                  userProf?.image
                    ? userProf?.image
                    : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664199194/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_1_qqzx4h.png"
                }
                alt={userProf?.name}
              />
            </div>

            <div className=" md:min-h-[200px] h-full py-2 px-6 ">
              <p className="text-xl font-semibold text-teal-700">
                Datos de contacto
              </p>
              <div className="bg-teal-800 w-7 h-1 my-1"></div>
              <div className="flex gap-3 items-center my-2">
                <p className="text-teal-800">
                  <FaMapMarkerAlt />
                </p>
                <p>{userProf?.city}</p>
              </div>

              {transactionAlready === undefined && contact === false && (
                <button
                  onClick={handleBeginTransaction}
                  className="px-6 py-3 my-4 bg-[#FFC700] rounded-md font-bold hover:bg-[ffd803]/80 transition-all duration-300"
                  hidden={userProf?.email === user.email ? true : false}
                >
                  Contactar anunciante
                </button>
              )}
              {(contact ||
                transactionAlready === null ||
                transactionAlready === "finalizado" ||
                transactionAlready === "calificado") && (
                <>
                  <div className="flex gap-3 items-center my-2">
                    <p className="text-teal-800">
                      <BsTelephoneFill />
                    </p>
                    <p>{userProf?.contact}</p>
                  </div>
                  <div className="flex gap-3 items-center my-2">
                    <p className="text-teal-800">
                      <GrMail />
                    </p>
                    <p> {userProf?.email}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* opiniones */}
          <section>
            <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 flex flex-col items-center md:items-start">
              <Reviews userProf={userProf} />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}
