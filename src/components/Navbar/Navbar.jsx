import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import{getPetsByStatus} from "../../store/actions/index"
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch=useDispatch();

  const handleClick=(e)=>{
    dispatch(getPetsByStatus(e.target.name))
  }
    return (
    <div className=" w-full sticky bg-[#F4F6F6]  z-50 flex top-0 items-center justify-between h-min max-w-screen-3xl sm:px-2 lg:px-2 ">
      <div className="flex items-center">
        <button type="button" className="p-2 sm:mr-4 lg:hidden">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> 
        <a href="/home" className="flex">
          <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
              className="inline-block w-20 h-20 rounded-lg"></img>
        </a>
      </div>  
      <SearchBar/>
      <div className="flex items-center justify-end flex-1 " >
        <nav className="hidden lg:uppercase lg:text-[#121212] lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
         <label htmlFor=""></label>
          <Link onClick={handleClick} name="encontrado" to="/estado/encontrado" className="block h-16 leading-[4rem] border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
          >
              Encontrados
          </Link>
        
          <Link onClick={handleClick} name="perdido" to="/estado/perdido" className="block h-16 leading-[4rem] border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
          >
              Perdidos
          </Link>

          <Link onClick={handleClick} name="adopcion" to="/estado/adopcion" className="block h-16 leading-[4rem] border-b-4 border-transparent ease-in-out duration-300 hover:text-[#28B0A2] hover:border-current hover:cursor-pointer"
          >
              Adopcion
          </Link>
      
        </nav>

        <div className="flex items-center ml-8">
          <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
            <span className=" ml-2">
              <a
                href="/account"
                className="block md:p-6 p-2 border-b-4 border-transparent hover:text-[#28B0A2]"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span className="sr-only"> Account </span>
              </a>
            </span>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
