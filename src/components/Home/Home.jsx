import React from "react";
import Donations from "../Donations/Donations";
import { FaHands } from "react-icons/fa";
import CardContainer from "../CardContainer/CardContainer";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { SiDatadog } from "react-icons/si";


export default function Home() {

  return (
    <>
      <Navbar />

      <div>
        <section className="relative py-40 px-4">
          <div className="z-20 relative  grid mt-40 lg:flex lg:justify-around md:flex md:justify-around sm:flex sm:justify-around md:mt-0 ">
            <a
              href="/"
              className=" flex py-2 backdrop-brightness-50 text-white hover:text-black border-2 border-yellow-300 text-center hover:bg-yellow-300 hover:opacity-100  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  mt-4 px-12 rounded-lg  lg:py-2 md:py-4 md:px-20 md:mt-32 "
            >
              <div className="flex gap-x-5 justify-items-center mx-auto items-center">
                <p>Dar en Adopción</p>
                <FaHands size="35px" className="fill:black"></FaHands>
              </div>
            </a>
            <a
              href="/"
              className="flex py-2 backdrop-brightness-50 text-white hover:text-black border-2 border-yellow-300 text-center hover:bg-yellow-300 hover:opacity-100  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium  mt-4 px-12 rounded-lg  lg:py-2 md:py-4 md:px-20 md:mt-32 "
            >
              <div className="flex gap-x-5 justify-items-center mx-auto items-center">
                Perdí mi Mascota{" "}
                <SiDatadog size="35px" className="fill:black"></SiDatadog>
              </div>
            </a>

            {/* <a href="/home" className="inline-block bg-indigo-500 text-white no-underline hover:bg-indigo-800 mt-4 px-12 lg:py-4 md:py-4 md:px-32 rounded-lg">Poner en Adopción</a> */}
          </div>

          <div className="absolute inset-0 h-auto z-10 bg-gradient-to-r from-yellow-600 to-gray-100 opacity-100">
            {/* <img src="https://res.cloudinary.com/dyzge4vha/image/upload/v1663047062/pexels-snapwire-46024_dom1vf.jpg" alt="" className="h-full w-full object-fit-cover mix-blend-lighten lg:h-100
    " /> */}
            <video
              className="w-full h-full absolute object-cover"
              src="https://res.cloudinary.com/dyzge4vha/video/upload/v1663047579/pexels-koolshooters-7682708_asouyn.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </section>
      </div>
      <CardContainer />
      <Donations />
      <Footer />
    </>
  );
}
