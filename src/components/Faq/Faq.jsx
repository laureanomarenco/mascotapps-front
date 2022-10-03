import React from "react";

import { Link } from "react-router-dom";
import Button from "../Button/Button";


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
      <details className="p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover  duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4 transition-all">
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
          Mascotapp es una página de servicios pensada para ayudar a conectar
          mascotas con sus cuidadores. En nuestra web podes publicar si perdiste
          a tu mascota, encontraste una, o tenés algún animal en adopción.
          Además podes buscar tu mascota si tenés ganas de adoptar o está
          extraviada.
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
          Mascotapp funciona gracias a la colaboración y apoyo de su comunidad.
          Para colaborar y encontrar ayuda no tenés más que registrarte y elegir
          tu camino. Ya sea buscando animales o publicándolos. Además a medida
          que interactuas con otros usuarios en la aplicación podés calificarlos
          para contribuir con el control del reporte en los abusos que puedan
          hacerse de la página. Si sos usuario registrado podrás sumar puntos al
          concretar alguna conversación por una mascota con alguna mascota en
          particular, ya sea que la hayas adoptado, dado en adopción, encontrado
          o recuperado. También sumas puntos si haces un aporte económico a
          través de nuestro sistema de donaciones. Luego podes canjear tus
          puntos en nuestra tienda. ¡Ah! ¡También podes guardar tus animales
          favoritos para verlos todos juntos!
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
          La página es completamente gratuita. ¡Para utilizar la totalidad de
          nuestros servicios no tenés más que registrarte! De todos modos si
          querés colaborar nos ayuda muchísimo y a las personas que quieren
          encontrar o reencontrase con su mascotas la difusión de la página y
          las publicaciones que en ella se comparten. Por otro lado, tenemos
          habilitado el apartado de donaciones por si querés darnos una mano
          para ayudar a la comunidad.
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
          Para registrarte no tenés más que proveer tu mail y una contraseña, y
          luego completar algunos datos como la ciudad donde vivís y algunas
          formas de contacto que solo podrán ver usuarios registrados que estén
          interesados en interactuar con vos por alguna publicación.
        </p>
      </details>
      <details className="relative p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Qué hago si recuperé o adoptaron mi mascota?
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
          Si recuperaste o adoptaron tu mascota podés actualizar su estado así
          pasa a nuestra lista de interacciones exitosas. Además podrás puntuar
          el intercambio con el usuario con el que finalizaste la interacción.
          Por otro lado, sería un gran momento para aprovechar la buena noticia
          y ayudarnos difundiendo o colaborando económicamente.
        </p>
      </details>
      <details className="relative p-6 border-l-4 border-[#FFC700] bg-gray-100 group drop-shadow-lg overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out hover:bg-gradient-to-r from-transparent via-yellow-200-100 to-[#FFC700] hover:opacity-70 mt-0 mb-4">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-semibold text-gray-900">
            ¿Cómo me comunico con un MascotAdmin?
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
          Podes enviar cualquier tipo de consulta ingresando tu mail y
          dejandonos la duda que tengas.{" "}
          <Link className="text-[#28B0A2] font-semibold" to={"/query"}>
            ¡Hacer consulta!
          </Link>
        </p>
      </details>

      <div className=" w-2/6  md:w-full mx-auto mt-6 mb-6 text-center ">
        {/* <Link
          to="/home"
          type="button"
          className="text-black bg-[#ffd803] hover:bg-[#ffd803]/80 focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          Volver
        </Link> */}
        <Button text={"Volver"} arrow={true} path="/home" />
      </div>
    </div>
  );
};

export default Faq;
