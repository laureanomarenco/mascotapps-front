import React, { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCity,
  updateProfile,
  myProfile,
} from "../../../store/actions/index";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Autocomplete from "@mui/material/Autocomplete";
import { AiOutlineCamera } from "react-icons/ai";

export default function ModalProfile({ belloPerfil }) {
  console.log("lo que llega al modal", belloPerfil)
  const [showModal, setShowModal] = React.useState(false);
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cities = useSelector((state) => state.cities);
  //eslint-disable-next-line
  const [input, setInput] = useState({
    id: user?.sub,
    email: user?.email,
    name: belloPerfil.name,
    city: belloPerfil.city,
    contact: belloPerfil.contact,
    image: belloPerfil.image,
  });

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
  //CLOUDINARY-------------------------------------
  //eslint-disable-next-line

  const CLOUD_NAME = "imagenes";
  const UPLOAD_PRESET = "dpxrr2uyq";

  const upload = async (e) => {
    const img = e.target.files[0];
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", CLOUD_NAME);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/image/upload`,
      { method: "POST", body: data }
    );
    const dataNew = await response.json();
    setInput({
      ...input,
      image: dataNew.secure_url,
    });
    // reemplazar con un mensaje de éxito o la acción deseada
  };

  //ESTADOS ---------------------------------------------------------------------------------------------------------

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
      if (e.target.name === "city" && e.target.value.length === "") {
        setInput({
          ...input,
          city: belloPerfil?.city,
        });
      }
      if (e.target.name === "name" && e.target.value.length === "") {
        setInput({
          ...input,
          name: belloPerfil?.name,
        });
      }
      if (e.target.name === "contact" && e.target.value.length === "") {
        setInput({
          ...input,
          contact: belloPerfil?.contact,
        });
      }
      console.log(input)
      dispatch(updateProfile(input));
      Swal.fire({
        title: "Perfil modificado correctamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          setShowModal(false);
          dispatch(myProfile({ id: user?.sub }));
        }
      });
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

  function handleClick() {
    setShowModal(true);
    setInput({
      ...input,
      name: belloPerfil.name,
      city: belloPerfil.city,
      contact: belloPerfil.contact,
      image: belloPerfil.image,
    });
  }

  return (
    <>
      <button
        className="  text-teal-600 font-bold uppercase text-lg px-4 py-3 rounded hover:text-teal-800 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleClick}
      >
        <BsPencilSquare />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Acá podés editar tus datos
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
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
                      <label htmlFor="image" className="sr-only">
                        Imagen
                      </label>

                      <div className="relative">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="image"
                          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                          placeholder="Imagen"
                          onChange={upload}
                        ></input>

                        <span className="absolute inset-y-0 inline-flex items-center right-4">
                          <AiOutlineCamera color="grey" />
                        </span>
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
                            <TextField {...params} label={input?.city} />
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
                        {!errors.contact ? null : (
                          <span>*{errors.contact}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                      >
                        Modificar los datos
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
