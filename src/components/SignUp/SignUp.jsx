import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, setLoggedUser } from "../../store/actions/index";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { CreateUser } from "../../store/actions/index";
import Swal from "sweetalert2";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { user, isAuthenticated } = useAuth0();

  //CIUDADES ARG--------------------------------------------------------------------------
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch]);

  let localidades = cities?.map((loc) => {
    return {
      nombre: loc.nombre,
      provincia: loc.provincia.nombre,
    };
  });

  localidades = localidades
    .sort((a, b) => a.provincia - b.provincia)
    .map((l) => `${l.nombre}, ${l.provincia}`);

  //ESTADOS ---------------------------------------------------------------------------------------------------------

  const [input, setInput] = useState({
    id: `${user?.sub}`,
    name: "",
    email: `${user?.email}`,
    city: "",
    contact: "",
    image: `${user?.picture}`,
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
    let errorObj = {};
    if (!input.name.trim()) {
      errorObj.name = "Todos los datos son obligatorios";
    }
    if (input.name.search("[0-9]") !== -1) {
      errorObj.name = "El nombre puede incluir números";
    }
    if (input.name.search("[^A-Za-z0-9]") !== -1) {
      errorObj.name = "El nombre puede incluir números, símbolos ni espacios";
    }
    if (!input.contact.trim()) {
      errorObj.contact = "Debes incluir un número de contacto";
    }
    return errorObj;
  }
  //SUBMIT --------------------------------------------------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.name || errors.city || errors.contact) {
      alert("Verifique los campos");
    } else {
      console.log("aca mando el usuario maldita sea!", input);
      dispatch(CreateUser(input));
      // alert("Usuario creado correctamente");
      Swal.fire({
        title: "Usuario creado correctamente",
        text: "Gracias por registrarte en Mascotapp.",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#28B0A2",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/home");
          setInput({});
          dispatch(setLoggedUser(input));
        }
      });
      // setInput({});
      // navigate("/home");
      // dispatch(setLoggedUser(input));
    }
  };
  if (!isAuthenticated) {
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

  if (isAuthenticated) {
    return (
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-6 lg:py-12">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Registro de Usuario
            </h1>

            <p className="mt-4 text-gray-500">
              Registrate completando el siguiente formulario y<br></br>
              accede a todas las funcionalidades de la app!
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
                  type="text"
                  name="contact"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Contacto"
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

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Regístrate
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              ¿Ya tienes una cuenta?
              <Link to="/">
                <span className="font-medium text-[#007663] hover:text-teal-500">
                  {" "}
                  Inicia Sesión
                </span>
              </Link>
            </p>
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
