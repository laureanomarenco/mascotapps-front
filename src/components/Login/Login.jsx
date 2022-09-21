import { Link } from "react-router-dom";
import React from "react";


export default function Login() {
  const googleLogin = () => {
    window.open("https://worker-production-2aad.up.railway.app/auth/google", "_self")
  }

  return (
    <>
      <div className="flex absolute w-full h-full items-center  justify-center  py-12 px-4 md:px-6 lg:px-8 md:w-1/3 lg:w-1/4 md:h-full md:right-10 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-48 w-auto"
              src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Ingresa a tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O
              <Link to="/home">
                <a className="font-medium text-[#28B0A2] hover:text-[#208a7f]">
                  {" "}
                  Navega sin registrarte
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label name="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label name="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button onClick={googleLogin}>
                Sign in con Google
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#007663] focus:ring-teal-500"
                />
                <label
                  name="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#28B0A2] hover:text-[#208a7f]"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="text-sm text-center ">
              <span className=" ">¿No tienes una cuenta? </span>
              <a
                href="/register"
                className="font-medium text-[#28B0A2] hover:text-[#208a7f]"
              >
                Crear usuario
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ecca08] py-2 px-4 text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
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
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
