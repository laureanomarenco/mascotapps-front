import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "../../store/actions/index";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
// import { CreateUser } from "../../store/actions/index";
import Swal from "sweetalert2";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { GiReceiveMoney } from "react-icons/gi";
import { header } from "../../constants/token";
import axios from "axios";
import { CREAT } from "../../constants/url";

const SignUp = () => {
  //eslint-disable-next-line
  const tokenAccess = localStorage.getItem("token");
  const response = useSelector((state) => state.user);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  //CIUDADES ARG--------------------------------------------------------------------------
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch, response]);

  let localidades = cities?.map((loc) => {
    return {
      nombre: loc.nombre,
      provincia: loc.provincia.nombre,
    };
  });

  localidades = localidades
    ?.sort((a, b) => a.provincia - b.provincia)
    ?.map((l) => `${l.nombre}, ${l.provincia}`);

  //ESTADOS ---------------------------------------------------------------------------------------------------------

  const [input, setInput] = useState({
    name: "",
    email: `${user?.email}`,
    city: "",
    contact: "",
    image: `https://res.cloudinary.com/dfbxjt69z/image/upload/v1664199194/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_1_qqzx4h.png`,
    linkToDonate: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  //VALIDACIONES------------------------------------------------------------------------------------------------------------------
  function validate(input) {
    let regexName = /^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚ\s]*$/;
    let errorObj = {};
    if (!input.name.trim()) {
      errorObj.name = "Todos los datos son obligatorios";
    }
    if (!input.name.match(regexName)) {
      errorObj.name = "El nombre puede incluir únicamente letras y espacios.";
    }
    if (input.name.length > 50) {
      errorObj.name = "El nombre no puede tener más de 50 caracteres.";
    }

    if (!input.contact.trim()) {
      errorObj.contact = "Debes incluir un número de contacto válido";
    }
    return errorObj;
  }
  //SUBMIT --------------------------------------------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.city || errors.contact) {
      alert("Verifique los campos");
    } else {
      try {
        let result = await axios.post(CREAT, input, header(tokenAccess));
        if (result.status === 200) {
          Swal.fire({
            title: "Usuario creado correctamente",
            text: "Gracias por registrarte en Mascotapp.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/home");
              setInput({});
            }
          });
        }
      } catch (error) {
        console.log("errocito", error.message);
        if (error.message) {
          Swal.fire({
            title: "Hubo un error!",
            text:
              "Hubo un error al crear tu usuario, por favor vuelve a intentarlo.",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("token");
              logout({ returnTo: window.location.origin });
              setInput({});
            }
          });
        }
      }
    }
  };
  if (!isLoading && !isAuthenticated) {
    Swal.fire({
      title: "No estás logueado",
      text: "Debes iniciar sesión para ver tu perfil.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#28B0A2",
      cancelButtonText: "Volver a inicio",
      confirmButtonText: "Iniciar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      } else {
        navigate("/home");
      }
    });
  }

  if (!isLoading && isAuthenticated) {
    return (
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-6 lg:py-12">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Bienvenid@ a Mascotapp
            </h1>

            <p className="mt-4 text-gray-500">
              Es tu primera vez aquí, te pedimos que completes tu perfil para
              continuar<br></br>y accede a todas las funcionalidades de la app!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 mb-0 space-y-2"
          >
            <div>
              <label htmlFor="nombre" className="sr-only">
                Nombre
              </label>

              <div className="relative">
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Nombre"
                  minLength={1}
                  maxLength={50}
                  value={input.name}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <AiOutlineUserAdd color="grey" />
                </span>
              </div>

              <div className="text-center text-xs text-red-500 mt-1">
                {!errors.name ? null : <span>*{errors.name}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Email"
                  value={user?.email}
                  disabled={true}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <MdAlternateEmail color="grey" />
                </span>
              </div>

              <div className="text-center text-xs text-red-500 mt-1">
                {!errors.email ? null : <span>*{errors.email}</span>}
              </div>
            </div>

            <div>
              <div className="relative">
                <Autocomplete
                  disablePortal
                  onChange={(event, value) =>
                    setInput({ ...input, city: value })
                  }
                  name="city"
                  id="combo-box-demo"
                  options={localidades}
                  sx={{ width: 1, borderRadius: 16, border: 0 }}
                  renderInput={(params) => (
                    <TextField {...params} label="selected" />
                  )}
                />
              </div>

              <div className="text-center text-xs text-red-500 mt-1">
                {!errors.city ? null : <span>*{errors.city}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="contact" className="sr-only">
                Contacto
              </label>

              <div className="relative">
                <input
                  onChange={handleChange}
                  type="tel"
                  name="contact"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Número de contacto"
                  pattern="^\+?\d{0,13}"
                  minLength={6}
                  maxLength={20}
                  value={input.contact}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <AiOutlineWhatsApp color="grey" />
                </span>
              </div>

              <div className="text-center text-xs text-red-500 mt-1">
                {!errors.contact ? null : <span>*{errors.contact}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="link" className="sr-only">
                Link de pago opcional
              </label>

              <div className="relative">
                <input
                  onChange={handleChange}
                  type="text"
                  name="linkToDonate"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Link de MercadoPago para recibir donaciones"
                  value={input.linkToDonate}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <GiReceiveMoney color="grey" />
                </span>
              </div>

              <div className=" text-xs italic text-gray-500 mt-1">
                *opcional
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Regístrate
              </button>
            </div>
          </form>
        </div>

        <div className="relative  sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
            alt=""
          />
        </div>
      </section>
    );
  }
};

export default SignUp;
