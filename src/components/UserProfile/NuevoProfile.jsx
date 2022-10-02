import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import BadgesPets from "../BadgesPets/BadgesPets";
import ModalProfile from "./ModalEdit/ModalEdit";
import Transactions from "./Transactions/Transactions";
import Footer from "../Footer/Footer";
import { Logout } from "../Logout/Logout";
import { BiDonateHeart } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyPets,
  myProfile,
  resetMyProfile,
  resetDetail,
} from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import ModalEditDog from "./ModalEditDog/ModalEditDog";

const NuevoProfile = () => {
  const [order, setOrder] = useState("");
  const [hidden, setHidden] = useState(true);
  const [activeModalEditDog, setActiveModalEditDog] = useState(false);
  const [dataEditDog, setDataEditDog] = useState({});

  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);

  const myProfileData = useSelector((state) => state.myProfile);
  console.log("🚀 ~ file: NuevoProfile.jsx ~ line 36 ~ NuevoProfile ~ myProfileData", myProfileData)
  const transactions = myProfileData?.transactions;

  const [activeDonateModal, setActiveDonateModal] = useState(false);
  const [activeAdopterModal, setActiveAdopterModal] = useState(false);
  const [activeFounderModal, setActiveFounderModal] = useState(false);

  const belloPerfil = {
    id: `${user?.sub}`,
    email: `${user?.email}`,
    name: myProfileData["userProps"]?.name,
    city: myProfileData["userProps"]?.city,
    contact: myProfileData["userProps"]?.contact,
    image: myProfileData["userProps"]?.image,
    linkToDonate: myProfileData["userProps"]?.linkToDonate
  };

  const handleSubmit = () => {
    if (isAuthenticated) {
      dispatch(getMyPets(user));
    }
  };
  //eslint-disable-next-line
  const handleClick = () => {
    setHidden(hidden === true ? false : true);
  };

  const handleActiveEditDog = (data) => {
    setActiveModalEditDog(!activeModalEditDog);
    data && setDataEditDog(data);
    setOrder(order === "now" ? "nowpAPASITO" : "now");
  };

  useEffect(() => {
    dispatch(myProfile({ id: user?.sub }));
    handleSubmit();
    return () => {
      dispatch(resetMyProfile());
      dispatch(resetDetail());
    };
  }, [order, dispatch, user, isLoading, isAuthenticated]);
  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        {" "}
        <Spinner />
      </div>
    );
  }
  if (!isLoading && !isAuthenticated) {
    Swal.fire({
      title: "No estás logueado",
      text: "Debes iniciar sesión para ver tu perfil.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#28B0A2",
      cancelButtonColor: "#B0B0B0",
      cancelButtonText: "Ir a inicio",
      confirmButtonText: "Iniciar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      } else {
        window.location.href = "/home";
      }
    });
  }

  if (!isLoading && isAuthenticated) {
    return (
      <div>
        <Navbar></Navbar>
        <div className=" my-5 mx-5 p-3">
          <div className="md:flex flex-col md:flex-row relative mx-auto ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-1/2 mx-auto md:mx-3 lg:w-3/12 lg:mx-3">
              {/* <!-- Profile Card --> */}
              <div className="bg-white p-3 border-t-4 border-[#FFC700] relative">
                <div className="image overflow-hidden w-[240px] h-[240px] mx-auto md:h-[200px] md:w-[200px]">
                  <img
                    className="h-full w-full  mx-auto rounded-full object-cover"
                    src={myProfileData["userProps"]?.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col absolute gap-3 right-0 top-3">
                  {myProfileData["userProps"]?.gaveUpForAdoption > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveAdopterModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-2xl sm:text-3xl sm:mx-3"
                    >
                      <MdPets />
                    </button>
                  )}
                  {activeAdopterModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                ¡Has dado mascotas en adopción!
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setActiveAdopterModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tienes esta insignia porque has dado mascotas en
                                adopción satisfactoriamente, para nosotros es
                                una alegría siempre que esto sucede porque es
                                uno de los motores que nos llevó a desarrollar
                                esta página. Tanto las mascotas y personas que
                                has ayudado, como todo el equipo de Mascotapp,
                                te agradecen profundamente.
                              </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setActiveAdopterModal(false)}
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  {myProfileData["userProps"]?.foundAPet > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveFounderModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-2xl sm:text-3xl sm:mx-3"
                    >
                      <GiTrophyCup />
                    </button>
                  )}
                  {activeFounderModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                ¡Has ayudado a recuperar una mascota perdida!
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setActiveFounderModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tienes esta insignia porque has encontrado y
                                devuelto a su dueño una mascota extraviada,
                                ¡esto es importantísimo! y es el motivo
                                principal por el que decidimos desarrollar esta
                                página ya que tener perdido a un amigo peludo es
                                una de las cosas más feas que nos puede pasar.
                                Por eso te agradecemos con esta insignia en
                                nombre del dueño, de la mascota y de todo el
                                equipo de Mascotapp.
                              </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setActiveFounderModal(false)}
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  {myProfileData["userProps"]?.isDonator === "true" && (
                    <button
                      type="button"
                      onClick={() => setActiveDonateModal(true)}
                      className=" transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-2xl sm:text-3xl sm:mx-3"
                    >
                      <BiDonateHeart />
                    </button>
                  )}
                  {activeDonateModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                ¡Has ayudado económicamente a Mascotapp!
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setActiveDonateModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tienes esta insignia porque has decidido
                                ayudarnos haciendo una donación. Además de la
                                satisfacción que nos produce ayudar a conectar
                                mascotas con sus dueños Mascotapp necesita
                                sostener su economía, y al ser un página de
                                acceso completamente gratuito ayudas como la
                                tuya son importantisimas para nosotros. ¡Te
                                agradecemos enormemente en nombre del equipo y
                                toda la comunida de Mascotapp!
                              </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setActiveDonateModal(false)}
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
                <h1 className="text-gray-600 font-bold text-xl leading-8 my-1 text-center">
                  {myProfileData["userProps"]?.name}
                </h1>
                <p className="text-gray-600 text-l leading-8 text-center">
                  {myProfileData["userProps"]?.points} puntos
                </p>
                <ul className=" mt-3 divide-y ">
                  <li className="grid items-center text-center py-3 gap-1">
                    <Link
                      to="/postpets"
                      className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                    >
                      Postear un aviso
                    </Link>
                    <Link
                      to="/store"
                      className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                    >
                      Canjear puntos
                    </Link>

                    <button
                      className="px-6 py-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                      onClick={handleClick}
                    >
                      {" "}
                      Ver mis mascotas
                    </button>
                    <div className="w-full">
                      <Logout />
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-1/2 lg:w-9/12 lg:mx-3 mx-2 ">
              {/* <!-- Profile tab -->
                <!-- About Section --> */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-700 leading-8">
                  <FaUser />
                  <span className="tracking-wide">Información de perfil</span>
                  <div>
                    <ModalProfile belloPerfil={belloPerfil} />
                  </div>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-1 text-sm lg:grid-cols-2">
                    <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                      <div className=" py-2 font-semibold text-[#28B0A2]">
                        Nombre
                      </div>
                      <div className=" py-2 text-gray-400 col-span-2">
                        {myProfileData["userProps"]?.name}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                      <div className=" py-2 font-semibold text-[#28B0A2]">
                        Contacto
                      </div>
                      <div className=" py-2 text-gray-400 col-span-2">
                        {myProfileData["userProps"]?.contact}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                      <div className=" py-2 font-semibold text-[#28B0A2]">
                        Email
                      </div>
                      <div className=" py-2 text-gray-400 col-span-2">
                        {belloPerfil?.email}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                      <div className=" py-2 font-semibold text-[#28B0A2]">
                        Ciudad
                      </div>
                      <div className=" py-2 text-gray-400 col-span-2">
                        {myProfileData["userProps"]?.city}
                      </div>
                    </div>
                    {myProfileData["userProps"]?.linkToDonate && (
                      <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                        <div className=" py-2 font-semibold text-[#28B0A2]">
                          Link de pago
                        </div>
                        <div className=" py-2 text-gray-400 col-span-2">
                          {myProfileData["userProps"]?.linkToDonate}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div hidden={hidden} className="w-full">
                {myPets?.length > 0 ? (
                  <BadgesPets
                    user={user}
                    hidden={hidden}
                    setHidden={setHidden}
                    handleActiveEditDog={handleActiveEditDog}
                    setOrder={setOrder}
                    setActiveModalEditDog={setActiveModalEditDog}
                    order={order}
                  />
                ) : null}
              </div>

              <div>
                <Transactions transactions={transactions} setOrder={setOrder} />
              </div>
            </div>
          </div>
        </div>
        {activeModalEditDog && (
          <ModalEditDog
            dataEditDog={dataEditDog}
            handleActiveEditDog={handleActiveEditDog}
          />
        )}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default NuevoProfile;
