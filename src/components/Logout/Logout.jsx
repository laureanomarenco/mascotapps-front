import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
    const {logout} = useAuth0()
    return (
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="group flex w-fit px-6 py-3 justify-center rounded-md border border-transparent bg-[#FFC700] font-bold  text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        {/* className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300" */}
        <span className="">
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
        Cerrar sesión
      </button>
    );
};
