import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import BadgesPets from "../BadgesPets/BadgesPets";
import ModalProfile from "./ModalEdit/ModalEdit";
import Transactions from "./Transactions/Transactions";
import { Logout } from "../Logout/Logout";
import { Link } from "react-router-dom";

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
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);
  const myProfileData = useSelector((state) => state.myProfile);
  console.log(
    "🚀 ~ file: UserProfile.jsx ~ line 24 ~ UserProfile ~ myProfileData",
    myProfileData
  );
  const { image, name, city, contact } = myProfileData;
  console.log(image, name, city, contact);
  console.log(myProfileData);
  const [hidden, setHidden] = useState(true);

  //eslint-disable-next-line
  const belloPerfil = {
    id: `${user?.sub}`,
    email: `${user?.email}`,
    name: name,
    city: city,
    contact: contact,
    image: image,
  };
  const handleSubmit = () => {
    if (isAuthenticated) {
      dispatch(getMyPets(user));
    }
  };
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
  }, []);
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
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <ModalProfile belloPerfil={belloPerfil} />
            <div className="bg-white p-3 border-t-4 border-[#FFC700]">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto rounded-full"
                  src={myProfileData[0]?.image}
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {myProfileData[0]?.name}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>

              <ul className=" mt-3 divide-y ">
                <li className="grid items-center text-center py-3 gap-1">
                  <Link
                    to="/postpets"
                    className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                  >
                    Postear un aviso!
                  </Link>

                  <button
                    className="px-6 py-3 bg-[#FFC700] rounded-md font-bold hover:bg-[ffd803]/80 transition-all duration-300"
                    onClick={handleClick}
                  >
                    {" "}
                    Ver mis mascotas!
                  </button>
                  <div className="w-full">
                    <Logout />
                  </div>
                </li>
                <div hidden={hidden} className="w-full">
                  {myPets.length > 0 ? (
                    <BadgesPets
                      user={user}
                      hidden={hidden}
                      setHidden={setHidden}
                    />
                  ) : null}
                </div>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div className="my-4"></div>
            {/* <!-- Friends card --> */}
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    Kojstantin
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    James
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    Natie
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    Casey
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- End of friends card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            {/* <!-- Profile tab -->
                <!-- About Section --> */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <FaUser />
                <span className="tracking-wide">Mi perfil de usuario</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Nombre
                    </div>
                    <div className=" py-2">{myProfileData[0]?.name}</div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Contacto
                    </div>
                    <div className=" py-2">{myProfileData[0]?.contact}</div>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Ciudad
                    </div>
                    <div className=" py-2">{myProfileData[0]?.city}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            <div className="my-4"> </div>

            {/* <!-- Experience and education --> */}
            <div className="bg-white p-3 shadow-sm rounded-sm"></div>
            {/* <!-- End of profile tab --> */}
            <Transactions myProfileData={myProfileData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProfile;
