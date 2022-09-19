import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { fetchCity, getSpecies, postPet } from "../../store/actions";

const PostPets = () => {
  const dispatch = useDispatch();
  const Petspecies = useSelector((state) => state.species);
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
      urlImage: dataNew.secure_url,
    });
    // reemplazar con un mensaje de éxito o la acción deseada
  };

  //CIUDADES ARG
  const cities = useSelector((state) => state.cities);

  let localidades = cities?.map((loc) => {
    return {
      nombre: loc.nombre,
      provincia: loc.provincia.nombre,
    };
  });
  localidades = localidades
    .sort((a, b) => a.provincia - b.provincia)
    .map((l) => `${l.nombre}, ${l.provincia}`);
  //-------------------------------------------------------------------------------------------------------------------

  const [input, setInput] = useState({
    name: "",
    spices: "",
    race: "",
    state: "",
    gender: "",
    age: "",
    vaccination: "",
    urlImage: "",
    description: "",
    city: "",
    contact: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPet(input));
    alert("mascota cargada");
    setInput({});
  };

  useEffect(() => {
    dispatch(fetchCity());
    dispatch(getSpecies());
  }, [dispatch]);
  return (
    <div className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-6 lg:py-12">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Postea una mascota</h1>

          <p className="mt-4 text-gray-500">
            Si perdiste, encontraste o queres dar en adopcion a una mascota
            <br></br>
            completa el siguente formulario!
          </p>
        </div>

        <form className="max-w-md mx-auto mt-8 mb-0 space-y-2">
          <div>
            <label htmlFor="nombre" className="sr-only">
              Nombre
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                type="tetx"
                name="name"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Nombre"
                value={input.name}
              />
            </div>
          </div>

          <div>
            <label htmlFor="especie" className="sr-only">
              Especie
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="spices"
                value={input.spices}
              >
                <option hidden>Especie</option>
                {Petspecies?.map((pSpecies) => (
                  <option
                    className="capitalize"
                    key={Math.random()}
                    value={pSpecies}
                  >
                    {pSpecies}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="Raza" className="sr-only">
              Raza
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                type="tetx"
                name="race"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Raza"
                value={input.race}
              />
            </div>
          </div>

          <div>
            <label htmlFor="estado" className="sr-only">
              Estado
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="state"
                value={input.state}
              >
                <option hidden>Estado</option>
                <option value="Perdido">Perdido</option>
                <option value="Adopcion">Adopcion</option>
                <option value="Encontrado">Encontrado</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="genero" className="sr-only">
              Género
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="gender"
                value={input.gender}
              >
                <option hidden>Genero</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="edad" className="sr-only">
              Estado
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="age"
                value={input.age}
              >
                <option hidden>Edad</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Joven">Joven</option>
                <option value="Adulto">Adulto</option>
                <option value="Adulto mayor">Adulto Mayor</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="vacunacion" className="sr-only">
              Carnet de vacunacion
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="vaccination"
                value={input.vaccination}
              >
                <option hidden>Vacunacion</option>
                <option value="si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="urlImage" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="file"
                name="urlImage"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Imagen"
                onChange={upload}
              ></input>

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <AiOutlineCamera color="grey" />
              </span>
            </div>

            {/* <div className="text-center text-xs text-red-500 mt-1">
        {!errors.email ? null : <span >*{errors.email}</span>}
          </div> */}
          </div>

          <div>
            <label htmlFor="descripcion" className="sr-only">
              Descripcion de la mascota
            </label>
            <div className="relative">
              <textarea
                onChange={handleChange}
                type="text"
                name="description"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Descripcion de la mascota..."
                value={input.description}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={localidades}
                sx={{ width: 1, borderRadius: 16, border: 0 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Provincia, localidad ..."
                    onChange={handleChange}
                    value={input.city}
                    name="city"
                  />
                )}
              />
            </div>

            {/* <div className="text-center text-xs text-red-500 mt-1">
        {!errors.city ? null : <span >*{errors.city}</span>}
          </div> */}
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

            {/* <div className="text-center text-xs text-red-500 mt-1">
        {!errors.contact ? null : <span >*{errors.contact}</span>}
          </div> */}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Siguiente
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
    </div>
  );
};

export default PostPets;
