import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Faq = () => {
  return (
    <div className="md:w-3/4 md:mx-auto">
      <div className="flex align-center">
        <h1 className="text-center text-4xl md:text-6xl font-bold lg:font-bold self-center text-[#28B0A2]">
          Preguntas frecuentes
        </h1>

        <img
          src="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1663795583/faqs.png"
          alt="faq-img"
          className="sm:ml-22 lg:ml-40 sm:w-[250px] w-[175px]"
        />
      </div>
      <details className="p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Qué es Mascotapp?
          </h5>

          <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="#28B0A2"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="relative p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Cómo funciona Mascotapp?
          </h5>

          <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="#28B0A2"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="relative p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Los servicios son gratuitos?
          </h5>

          <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="#28B0A2"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="relative p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Cómo me registro?
          </h5>

          <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="#28B0A2"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <div className="h-[50px] mt-6 w-2/6 mx-auto text-center">
        <Link
          to="/home"
          type="button"
          className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          <BiArrowBack />
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Faq;
