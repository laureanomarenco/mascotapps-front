import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {FiLogOut} from "react-icons/fi"

export const Logout = () => {
  const { logout } = useAuth0();
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("banned");
    logout({ returnTo: window.location.origin });
  }
  return (
    <button
      onClick={handleLogout}
      className="group flex w-full px-6 py-3  items-center gap-3 justify-center rounded-md border border-transparent bg-[#FFC700] font-bold  text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
    >
      {/* className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300" */}
      <span className="">
        <FiLogOut/>
      </span>
      Cerrar sesión
    </button>
  );
};
