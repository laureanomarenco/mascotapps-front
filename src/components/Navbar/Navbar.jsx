import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-none flex items-center justify-between h-16 mt-4  max-w-screen-3xl sm:px-2 lg:px-2">
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
         
          <img src="https://images-ext-1.discordapp.net/external/NbkNzl5R3HRUApjIYRPJSuoSGAioBpGCaLrcNAxdTds/https/res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
              className="inline-block w-32 h-25  rounded-lg"></img>
        </a>
      </div>
      {/* <div className="flex items-center ml-8 ">
        <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x" >
        <span className=" block p-6 border-b-4 border-transparent hover:border-indigo-500 hover:cursor-pointer hidden sm:block">
                <svg className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <span className="sr-only"> Search </span>
            </span> 
        </div>
      </div> */}

      <div className="flex items-center justify-end flex-1 ml-" >
        <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
         <label htmlFor=""></label>
          <p className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-500 hover:border-current"
          >
              Encontrados
          </p>
        
          <p className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-500 hover:border-current"
          >
              Extraviados
          </p>

          <p className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-500 hover:border-current"
          >
              Adopcion
          </p>
      
          <a
            href="/contact"
            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-500 hover:border-current"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center ml-8">
          <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
            {/* <span>
              <a
                href="/cart"
                className="block p-6 border-b-4 border-transparent hover:border-red-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                <span className="sr-only">Cart</span>
              </a>
            </span> */}

            <span>
              <a
                href="/account"
                className="block p-6 border-b-4 border-transparent hover:border-indigo-500"
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
