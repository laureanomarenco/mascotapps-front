import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
//eslint-disable-next-line
import { Logout } from "../Logout/Logout";
//eslint-disable-next-line
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton";

export default function Login() {
  //eslint-disable-next-line
  const { user, isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const handleValidation = async (user, isAuthenticated) => {
    try {
      if (isAuthenticated && user) {
        let existe = await axios.post(
          "https://mascotapps-back-dev-2.up.railway.app/users/exists ",
          {
            id: user?.sub,
          }
        );
        if (existe.data.msg) {
          navigate("/home");
        } else {
          navigate("/register");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) {
    handleValidation(user, isAuthenticated);
  }

  return (
    <>
      <div className="absolute w-full h-full items-center  justify-center  py-12 px-4 md:px-6 lg:px-8 md:w-1/3 lg:w-1/4 md:h-full md:right-10 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-48 w-auto"
              src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Bienvenidos a Mascotapp
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST">
              {isAuthenticated ? (
                <div>
                  <Logout />
                </div>
              ) : (
                <div>
                  <LoginButton
                    text="Ingresa a tu cuenta"
                    className="group relative flex
                    w-full justify-center rounded-md border border-transparent
                    bg-[#ecca08] py-2 px-4 text-sm font-medium text-black
                    hover:bg-[#ffd903] focus:outline-none focus:ring-2
                    focus:ring-amber-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-black group-hover:text-[#0f0f0f]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </LoginButton>
                </div>
              )}
            </form>
          </div>
          <div>
            <p className="mt-2 text-center  text-gray-600 ">
              <Link to="/home">
                <a className="font-medium text-[#28B0A2] hover:text-[#208a7f]">
                  {" "}
                  Navegar sin registrarse
                </a>
              </Link>
            </p>
            <p className="mt-2 text-center  text-gray-600">
              <Link to="/faqs">
                <a className="font-medium text-[#28B0A2] hover:text-[#208a7f]">
                  {" "}
                  FAQs
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
