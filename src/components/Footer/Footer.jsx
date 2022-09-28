import React from "react";
import { Link } from "react-router-dom";
import {MdEmail} from 'react-icons/md'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";

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
              to="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsFacebook className='pointer text-[22px] text-gray-700/75 transition hover:text-gray-700 transition-colors'/>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram className='pointer text-[24px] text-gray-700/75 transition hover:text-gray-700 transition-colors'/>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiOutlineTwitter  className='pointer text-[24px] text-gray-700/75 transition hover:text-gray-700 transition-colors'/>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <AiOutlineGithub  className='pointer text-[24px] text-gray-700/75 transition hover:text-gray-700 transition-colors'/>
            </Link>
          </li>

          {/* <li>
            <Link
              to="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li> */}
          <li>
            <Link 
              to={'/query'}
              rel='noopener noreferrer'
            >
              <MdEmail className='pointer text-[24px] text-gray-700/75 transition hover:text-gray-700 transition-colors'/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
