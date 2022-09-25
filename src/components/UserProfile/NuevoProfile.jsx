import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import BadgesPets from "../BadgesPets/BadgesPets";
import ModalProfile from "./ModalEdit/ModalEdit";
import Transactions from "./Transactions/Transactions";
import Footer from "../Footer/Footer";
import { Logout } from "../Logout/Logout";
import { BiDonateHeart } from "react-icons/bi";

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

const NuevoProfile = () => {
  const [order, setOrder] = useState("");
  console.log(
    "🚀 ~ file: NuevoProfile.jsx ~ line 23 ~ NuevoProfile ~ order",
    order
  );
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);
  const myProfileData = useSelector((state) => state.myProfile);
  const transactions = myProfileData?.transactions;
  console.log(
    "🚀 ~ file: UserProfile.jsx ~ line 24 ~ UserProfile ~ mymyProfileData",
    myProfileData
  );
  const [hidden, setHidden] = useState(true);

  const belloPerfil = {
    id: `${user?.sub}`,
    email: `${user?.email}`,
    name: myProfileData["userProps"]?.name,
    city: myProfileData["userProps"]?.city,
    contact: myProfileData["userProps"]?.contact,
    image: myProfileData["userProps"]?.image,
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

  useEffect(() => {
    dispatch(myProfile({ id: user?.sub }));
    handleSubmit();
    return () => {
      dispatch(resetMyProfile());
      dispatch(resetDetail());
    };
  }, [order, dispatch]);
  if (!isAuthenticated) {
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
  console.log("aqui bello perfil", belloPerfil);
  // console.log(prueba);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 relative">
          {myProfileData['userProps'].isDonator &&(
            <div className="absolute transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl">
              <BiDonateHeart />
            </div>)
          }
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-[#FFC700]">
              <div className="image overflow-hidden w-[280px] h-[280px] mx-auto">
                <img
                  className="h-full w-full  mx-auto rounded-full object-cover"
                  src={myProfileData["userProps"]?.image}
                  alt=""
                />
              </div>
              <h1 className="text-gray-600 font-bold text-xl leading-8 my-1 text-center">
                {myProfileData["userProps"]?.name}
              </h1>

              <ul className=" mt-3 divide-y ">
                <li className="grid items-center text-center py-3 gap-1">
                  <Link
                    to="/postpets"
                    className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                  >
                    Postear un aviso!
                  </Link>

                  <button
                    className="px-6 py-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                    onClick={handleClick}
                  >
                    {" "}
                    Ver mis mascotas!
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
          <div className="w-full md:w-9/12 mx-2 ">
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
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Nombre
                    </div>
                    <div className=" py-2 text-gray-400">
                      {myProfileData["userProps"]?.name}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Contacto
                    </div>
                    <div className=" py-2 text-gray-400">
                      {myProfileData["userProps"]?.contact}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Email
                    </div>
                    <div className=" py-2 text-gray-400">
                      {belloPerfil?.email}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Ciudad
                    </div>
                    <div className=" py-2 text-gray-400">
                      {myProfileData["userProps"]?.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div hidden={hidden} className="w-full">
              {myPets?.length > 0 ? (
                <BadgesPets user={user} hidden={hidden} setHidden={setHidden} />
              ) : null}
            </div>

            <Transactions transactions={transactions} setOrder={setOrder} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NuevoProfile;
