import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import React from "react";
import { Logout } from "../Logout/Logout";
import { getMyPets } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import BadgesPets from "../BadgesPets/BadgesPets";

export default function UserProfile() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);

  const handelSubmit = () => {
    if (isAuthenticated) {
      dispatch(getMyPets(user));
    }
  };
  console.log(
    "🚀 ~ file: UserProfile.jsx ~ line 11 ~ UserProfile ~ user",
    user
  );
  //PROVISORIO POR FAVOR NO TOCAR ESTA FUNCION------------------------------------------------------------
  // const callAll = async () => {
  //   var allpets = await axios.post(
  //     "https://mascotapps-back-dev-2.up.railway.app/users/getallpetsofuser",
  //     { id: user?.sub }
  //   );
  //   console.log("🚀 ~ file: UserProfile.jsx ~ line 23 ~ callAll ~ allpets", allpets)
  // };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     callAll();
  //   }
  // }, []);
  // --------------------------------------------------------------------------------------------------
  if (!isAuthenticated) {
    Swal.fire({
      title: "No estás logueado",
      text: "Debes iniciar sesión para ver tu perfil.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#28B0A2",
      cancelButtonText: "Volver a inicio",
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
          <div className="md:col-span-3 h-36 text-center flex content-center items-center justify-center">
            <p className="text-4xl font-semibold uppercase text-[#28B0A2]">
              Mi perfil de usuario
            </p>
          </div>
          <div className="w-52 h-52 rounded-full overflow-hidden mx-auto">
            <img
              className="object-cover w-full h-full object-center"
              src={
                user?.picture
                  ? user?.picture
                  : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663934784/mascotapps/mascotapss_jxt9hl.png"
              }
              alt=""
            />
          </div>
          <div className=" h-full md:min-h-[200px] py-2 px-6">
            <p className="text-xl font-semibold text-teal-800">
              Mis datos de registro
            </p>
            <div className="bg-teal-800 w-7 h-1"></div>
            <p className="">Nombre {user?.given_name}</p>
            <p className="">Email {user?.email}</p>
          </div>
          <div className=" md:min-h-[200px] h-full py-2 px-6">
            <p className="text-xl font-semibold text-teal-800">
              Mis datos de contacto
            </p>
            <div className="bg-teal-800 w-7 h-1"></div>
            <p>Celular</p>
            <p>Email {user?.email} </p>
            <p>Zona</p>
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
            > Ver mis mascotas!</button>

            <Logout />
          </div>
          {myPets.length > 0 ? <BadgesPets /> : null}
        </div>
        <Footer />
      </div>
    );
  }
}
