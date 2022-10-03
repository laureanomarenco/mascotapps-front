import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, getSpecies, updatePet } from "../../../store/actions";
import Swal from "sweetalert2";
import validate from "../../PostPets/validate";

export default function ModalEditDog({ handleActiveEditDog, dataEditDog }) {
  const dispatch = useDispatch();
  const PetSpecies = useSelector((state) => state.species);
  const [error, setError] = useState({});
  const [input, setInput] = useState({ ...dataEditDog });
    const tokenAccess = localStorage.getItem("token");

  const showAlert = () => {
    Swal.fire({
      title: "Gracias!",
      text: "Tu mascota fue actualizada con exito",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        handleActiveEditDog()
      }
    });
  };
  const showError = () => {
    Swal.fire({
      title: "Error!",
      text: "verifique los campos",
      icon: "error",
      confirmButtonText: "Ok",
    });
  };

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(error).length) {
      showError();
    } else {
      dispatch(updatePet(input, tokenAccess));
      showAlert();
      setInput({});
    }
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCity());
    dispatch(getSpecies());
  }, [dispatch]);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-3 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Edita los datos de tu mascota
              </h3>
            </div>
            <div className="relative p-6 flex-auto">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-8 mb-0 space-y-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={input.name}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  onChange={handleChange}
                />
                {error.name ? <span>{error.name}</span> : <span></span>}
                <div className="flex">
                  <select
                    onChange={handleChange}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    name="specie"
                    value={input.specie}
                  >
                    <option hidden>Especie</option>
                    {PetSpecies?.map((especie) => (
                      <option
                        className="capitalize"
                        key={Math.random()}
                        value={especie}
                      >
                        {especie}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="race"
                    placeholder="Raza"
                    value={input.race}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                    onChange={handleChange}
                  />
                </div>
                <div className="flex">
                  <select
                    onChange={handleChange}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    name="status"
                    value={input.status}
                  >
                    <option hidden>Estado</option>
                    <option value="perdido">Perdido</option>
                    <option value="en adopción">Adopcion</option>
                    <option value="encontrado">Encontrado</option>
                  </select>
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
                <div className="flex">
                  <select
                    onChange={handleChange}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    name="age"
                    value={input.age}
                  >
                    <option hidden>Edad</option>
                    <option value="muy joven">Cachorro</option>
                    <option value="joven">Joven</option>
                    <option value="adulto">Adulto</option>
                    <option value="viejo">Adulto Mayor</option>
                    <option value="desconocido">Desconocido</option>
                  </select>
                  <select
                    onChange={handleChange}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    name="vaccinationSchemeStatus"
                    value={input.vaccinationSchemeStatus}
                  >
                    <option hidden>Vacunacion</option>
                    <option value="completo">Completo</option>
                    <option value="incompleto">Incompleto</option>
                    <option value="desconocido">Desconocido</option>
                  </select>
                </div>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="image"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Imagen"
                  onChange={upload}
                />
                <textarea
                  onChange={handleChange}
                  type="text"
                  name="comments"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Descripcion de la mascota..."
                  value={input.comments}
                />
                {!error.comments ? null : (
                  <span className="block text-center text-xs text-red-500">
                    *{error.comments}
                  </span>
                )}
                {/* codear antes de esto */}
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
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleActiveEditDog}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
