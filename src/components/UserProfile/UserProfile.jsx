import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import { getUserInfo, isLogged } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
//import { FaLongArrowAltUp } from "react-icons/fa";
import axios from "axios";

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //const statusLog = useSelector((state) => state.statusLogin);
  console.log(
    "🚀 ~ file: UserProfile.jsx ~ line 11 ~ UserProfile ~ user",
    user
  );

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(isLogged());
  }, []);

  function logOut() {
    axios.get("https://worker-production-2aad.up.railway.app/auth/logout", { withCredentials: true })
  }


    return (
      <div className="flex flex-col items-center w-full h-full min-w-screen">
      <Navbar className="w-full" />
      <div className="grid md:grid-cols-3 gap-2 items-center justify-center content-center w-full px-4  max-h-fit ">
        <div className="md:col-span-3 h-36 text-center flex content-center items-center justify-center">
          <p className="text-4xl font-semibold uppercase text-[#28B0A2]">
            Mi perfil de usuario
          </p>
        </div>
        <div className="w-52 h-52 rounded-full overflow-hidden mx-auto">
          <img
            className="object-cover w-full h-full object-center"
            src={user?.thumbnail}
            alt=""
            />
        </div>
        <div className=" h-full md:min-h-[200px] py-2 px-6">
          <p className="text-xl font-semibold text-teal-800">
            Mis datos de registro
          </p>
          <div className="bg-teal-800 w-7 h-1"></div>
          <p className="">Nombre {user?.displayName}</p>
          <p className="">Email {user?.email}</p>
        </div>
        <div className=" md:min-h-[200px] h-full py-2 px-6">
          <p className="text-xl font-semibold text-teal-800">
            Mis datos de contacto
          </p>
          <div className="bg-teal-800 w-7 h-1"></div>
          <p>Celular</p>
          <p>Email {user?.email}</p>
          <p>Zona</p>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-3 my-6 px-4  md:flex-row md:justify-center md:col-span-3">
          <Link
            to="/postpets"
            className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
            >
            Postear un aviso
          </Link>
        </div>
        <button onClick={logOut}>LOGOUT</button>
      </div>
      <Footer />
    </div>
  );
 
}
