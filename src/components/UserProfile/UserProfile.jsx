import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React from "react";
import { Logout } from "../Logout/Logout";
import { getMyPets, myProfile, resetMyProfile } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import BadgesPets from "../BadgesPets/BadgesPets";
import { useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ModalProfile from "./ModalEdit/ModalEdit";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);
  const myProfileData = useSelector((state) => state.myProfile);
  console.log(
    "🚀 ~ file: UserProfile.jsx ~ line 18 ~ UserProfile ~ myProfileData",
    myProfileData
  );
  const { name, city, contact, image } = myProfileData;

  const handelSubmit = () => {
    if (isAuthenticated) {
      dispatch(getMyPets(user));
    }
  };

  useEffect(() => {
    dispatch(myProfile({ id: user?.sub }));
    return () => {
      dispatch(resetMyProfile());
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

  if (isAuthenticated) {
    return (
      <div className="flex flex-col items-center w-full h-full min-w-screen">
        <Navbar className="w-full" />
        <div className="grid md:grid-cols-3 gap-2 items-center justify-center content-center w-full px-4  max-h-fit ">
          <div className="md:col-span-3 gap-3 h-36 text-center flex content-center items-center justify-center">
            <p className="text-4xl md:text-2xl font-semibold uppercase text-[#28B0A2]">
              Mi perfil de usuario
            </p>
          </div>

          <div className="relative w-fit mx-auto p-2">
            <ModalProfile />
            <img
              className=" w-52 h-52 rounded-full overflow-hidden mx-auto relative object-cover object-center"
              src={image}
              alt=""
            />
          </div>

          <div className=" h-full md:min-h-[200px] py-2 px-6 mx-auto">
            <p className="text-xl font-semibold text-teal-800">
              Mis datos de registro
            </p>
            <div className="bg-teal-800 w-7 h-1"></div>
            <div className="flex items-center justify-start gap-3 my-2">
              <p className=" text-teal-800">
                <FaUser />{" "}
              </p>
              <p>{name} </p>
            </div>
            <div className="flex items-center justify-start gap-3 my-2">
              <p className=" text-teal-800">
                <GrMail />{" "}
              </p>
              <p>{user?.email} </p>
            </div>
          </div>
          <div className=" md:min-h-[200px] h-full py-2 px-6 mx-auto">
            <p className="text-xl font-semibold text-teal-800">
              Mis datos de contacto
            </p>
            <div className="bg-teal-800 w-7 h-1"></div>
            <div className="flex items-center justify-start gap-3 my-2">
              <p className=" text-teal-800">
                <BsTelephoneFill />
              </p>
              <p>{contact}</p>
            </div>
            <div className="flex items-center justify-start gap-3 my-2">
              <p className=" text-teal-800">
                <GrMail />{" "}
              </p>
              <p>{user?.email} </p>
            </div>
            <div className="flex items-center justify-start gap-3 my-2">
              <p className=" text-teal-800">
                <FaMapMarkerAlt />
              </p>
              <p>{city}</p>
            </div>
          </div>
          <div className="flex flex-col w-full  max-w-[700px] items-start justify-center gap-6 my-6 px-4  md:flex-row md:justify-center md:col-span-3">
            <Link
              to="/postpets"
              className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
            >
              Postear un aviso!
            </Link>

            <button
              className="px-6 py-3 bg-[#FFC700] rounded-md font-bold hover:bg-[ffd803]/80 transition-all duration-300"
              onClick={handelSubmit}
            >
              {" "}
              Ver mis mascotas!
            </button>

            <Logout />
          </div>
          {myPets.length > 0 ? <BadgesPets /> : null}
        </div>
        <Footer />
      </div>
    );
  }
}
