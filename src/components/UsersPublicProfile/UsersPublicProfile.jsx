import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";
import Rating from "@mui/material/Rating";
import Reviews from "../UserProfile/Transactions/Reviews";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { beginTransaction, getUserReviews } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { BiDonateHeart } from "react-icons/bi";

export default function UserPuserProfsPublicProfile() {
  const { user } = useAuth0();
  const location = useLocation();
  const { userProf, idPet } = location.state;

  const reviews = useSelector((state) => state.userReviews);
  console.log(reviews);
  console.log(
    "🚀 ~ file: UsersPublicProfile.jsx ~ line 18 ~ UsersPublicProfile ~ idPet",
    userProf
  );
  const dispatch = useDispatch();
  console.log("ESTEEEEE", user);
  console.log(userProf);

  const [contact, setContact] = useState(false);

  function handleBeginTransaction() {
    setContact(true);
    dispatch(beginTransaction(idPet, user?.sub));
  }

  useEffect(() => {
    dispatch(getUserReviews(userProf?.id));
  }, []);

  if (!userProf?.name) {
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

        <div className=" my-8 mx-3 md:mx-20 rounded-sm drop-shadow-md">
          {/* perfil */}
          <div className="grid md:grid-cols-2 gap-2 items-center justify-center content-center w-full px-4  max-h-fit ">
            <div className="md:col-span-3 h-36 text-center flex content-center items-center justify-center">
              <p className="text-4xl font-semibold uppercase text-[#28B0A2]">
                Perfil de {userProf?.name}
              </p>
            </div>
            <div className="w-52 h-52 rounded-full overflow-hidden mx-auto">
              {userProf?.isDonator === "true" && (
                <div className="absolute transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl">
                  <BiDonateHeart />
                </div>
              )}
              <img
                className="object-cover w-full h-full object-center"
                src={userProf?.image}
                alt={userProf?.name}
              />
            </div>

            <div className=" md:min-h-[200px] h-full py-2 px-6 ">
              <p className="text-xl font-semibold text-teal-800">
                Datos de contacto
              </p>
              <div className="bg-teal-800 w-7 h-1 my-3"></div>
              <div className="flex gap-3 items-center">
                <p className="text-teal-800">
                  <FaMapMarkerAlt />
                </p>
                <p>{userProf?.city}</p>
              </div>
              {contact ? (
                <>
                  <div className="flex gap-3 items-center">
                    <p className="text-teal-800">
                      <BsTelephoneFill />
                    </p>
                    <p>{userProf?.contact}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="text-teal-800">
                      <GrMail />
                    </p>
                    <p> {userProf?.email}</p>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleBeginTransaction}
                  className="px-6 py-3 my-4 bg-[#FFC700] rounded-md font-bold hover:bg-[ffd803]/80 transition-all duration-300"
                  hidden={userProf?.email === user.email ? true : false}
                >
                  Contactar anunciante
                </button>
              )}
            </div>
          </div>
          {/* opiniones */}
          <section>
            <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 flex flex-col items-center md:items-start">
              <Reviews userProf={userProf} />
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                {userProf?.review ? (
                  userProf.review?.map((review) => (
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
                    </blockquote>
                  ))
                ) : (
                  <p>Este usuario aun no cuenta con calificaciones</p>
                )}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}
