import React, { useEffect, useState } from "react";
import Donations from "../Donations/Donations";
import CardContainer from "../CardContainer/CardContainer";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { visitorsCounter } from "../../store/actions/index";
import { Link } from "react-router-dom";
import { BsCircle, BsCircleFill } from "react-icons/bs";

export default function Home() {
  const dispatch = useDispatch();
  const texts = [
    {
      title: "Encontraste una mascota?",
      subtitle: "Publicá para encontrar a su dueño",
      button: "Publicar",
      path: "/postpet",
    },
    {
      title: "Perdiste tu mascota?",
      subtitle: "Publicá y si alguien la vió podrá ponerse en contacto",
      button: "Publicar",
      path: "/postpet",
    },
    {
      title: "¿Querés adoptar?",
      subtitle: "Adoptá una mascota y dale una nueva oportunidad",
      button: "Ver mascotas",
      path: "/estado/adopcion",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedText, setSelectedText] = useState(texts[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewText = (selectedIndex, texts, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < texts.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : texts.length - 1;
      setSelectedText(texts[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 100);
  };

  function handleClick(index) {
    setSelectedIndex(index);
    selectNewText(index, texts);
  }

  useEffect(() => {
    dispatch(visitorsCounter());
    const interval = setInterval(() => {
      selectNewText(selectedIndex, texts);
    }, 2800);
    setLoaded(true);
    return () => clearInterval(interval);
  }, [dispatch, selectedIndex, selectedText]);

  return (
    <>
      <Navbar />

      <div>
        <section className="relative py-44 px-4">
          <div className="z-20 relative  mt-30 lg:flex  md:flex  sm:flex  md:mt-0 h-full">
            <div
              className={
                loaded
                  ? "opacity-100 w-full ease-in duration-300 object-cover z-50 px-10 flex flex-col gap-2"
                  : "w-full  ease-in duration-300 object-cover  opacity-0 px-10 flex flex-col gap-2"
              }
            >
              <h1 className="text-white text-5xl md:text-7xl font-bold">
                {selectedText?.title}
              </h1>
              <p className="text-white text-2xl md:text-4xl">
                {selectedText?.subtitle}
              </p>
              <div className="my-3 flex gap-3 h-">
                <Link
                  to={selectedText?.path}
                  className="px-6 py-3 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300 w-fit"
                >
                  {selectedText?.button}
                </Link>
                <Link
                  to="/faqs"
                  className="px-6 py-3 my-3 font-bold backdrop-brightness-50 text-white hover:text-black border-2 border-[#ffd803] text-center hover:bg-[#ffd803] hover:opacity-100  focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg "
                >
                  + info
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-fit mx-auto absolute inset-x-0 bottom-5 z-50  ">
            <button
              className="text-xs text-white"
              onClick={() => handleClick(2)}
            >
              {selectedIndex === 0 ? <BsCircleFill /> : <BsCircle />}
            </button>
            <button
              className="text-xs text-white"
              onClick={() => handleClick(0)}
            >
              {selectedIndex === 1 ? <BsCircleFill /> : <BsCircle />}
            </button>
            <button
              className="text-xs text-white"
              onClick={() => handleClick(1)}
            >
              {selectedIndex === 2 ? <BsCircleFill /> : <BsCircle />}
            </button>
          </div>
          <div className="absolute inset-0 h-auto bg-gradient-to-r from-yellow-600 to-gray-100 opacity-100">
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
