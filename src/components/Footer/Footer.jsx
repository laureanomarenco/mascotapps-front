import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import {
  AiOutlineGithub,

} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F6] w-full h-fit">
      <div className="max-w-4xl px-4 py-4 mx-auto sm:px-6 lg:px-3">
        <div className="flex justify-center m-0">
          <img
            className="w-44"
            src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
          />
        </div>
        <p className="max-w-md mx-auto leading-relaxed text-center text-[#28B0A2] font-semibold">
          Mascotapp brinda un servicio de vinculación entre personas que deseen
          adoptar y/o dar en adopción mascotas.
        </p>
        <ul className="flex justify-center mt-6 gap-6 md:gap-8">
          <li className="text-gray-700 transition hover:text-gray-700/75">
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link
              to="/team"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              Team
            </Link>
          </li>

          <li>
            <a
            href="https://github.com/laureanomarenco/mascotapps-front"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <AiOutlineGithub className="pointer text-[24px] text-gray-700/75  hover:text-gray-700 transition-colors" />
            </a>
          </li>

          <li>
            <Link to={"/query"} rel="noopener noreferrer">
              <MdEmail className="pointer text-[24px] text-gray-700/75  hover:text-gray-700 transition-colors" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
