import React from "react";
import Navbar from "../Navbar/Navbar";
import RatingStar from "../RatingStar/RatingStar";
import Footer from "../Footer/Footer";

import Spinner from "../Spinner/Spinner";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";

export default function UsersPublicProfile() {
  const location = useLocation();
  const { user } = location.state;
  if (!user?.name) {
    return (
      <>
        <Navbar />
        <Spinner />
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="grid md:grid-cols-3 gap-2 items-start justify-center content-center w-full px-4  max-h-fit ">
          <div className="md:col-span-3 h-36 text-center flex content-center items-center justify-center">
            <p className="text-4xl font-semibold uppercase text-[#28B0A2]">
              Perfil de {user?.name}
            </p>
          </div>
          <div className="w-52 h-52 rounded-full overflow-hidden mx-auto">
            <img
              className="object-cover w-full h-full object-center"
              src={user?.image}
              alt={user?.name}
            />
          </div>

          <div className=" md:min-h-[200px] h-full py-2 px-6">
            <p className="text-xl font-semibold text-teal-800">
              Datos de contacto
            </p>
            <div className="bg-teal-800 w-7 h-1"></div>
            <p>Celular {user?.contact}</p>
            <p>Email {user?.email}</p>
            <p>Zona: {user?.city}</p>
          </div>
          <div>
            <RatingStar />
          </div>
        </div>
        <section>
          <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold sm:text-2xl">
              Opiniones de otros usuarios
            </h2>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {user?.review?.map((review) => (
                <blockquote key={Math.random()}>
                  <header className="sm:items-center sm:flex">
                    <div className="flex -ml-1">
                      {" "}
                      <Rating name="stars" value={review.stars} />
                    </div>

                    <p className="mt-2 font-medium sm:ml-4 sm:mt-0">
                      {review.review}
                    </p>
                  </header>

                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est
                    totam iusto alias incidunt cum tempore aliquid aliquam error
                    quisquam ipsam asperiores! Iste?
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
