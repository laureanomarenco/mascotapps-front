import React from "react";

const PostPets = () => {
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
                type="tetx"
                name="name"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Nombre"
                // value={input.name}
              />
            </div>
          </div>

          <div>
            <label htmlFor="especie" className="sr-only">
              Especie
            </label>
            <div className="relative">
              <select
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="spice"
                // value={input.spice}
              >
                <option hidden>Especie</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="Raza" className="sr-only">
              Raza
            </label>
            <div className="relative">
              <input
                type="tetx"
                name="race"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Raza"
                // value={input.race}
              />
            </div>
          </div>

          <div>
            <label htmlFor="estado" className="sr-only">
              Estado
            </label>
            <div className="relative">
              <select
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="state"
                // value={input.state}
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
              Genero
            </label>
            <div className="relative">
              <select
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="gender"
                // value={input.gender}
              >
                <option hidden>Genero</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="vacunacion" className="sr-only">
              Carnet de vacunacion
            </label>
            <div className="relative">
              <select
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                name="vaccination"
                // value={input.vaccination}
              >
                <option hidden>Vacunacion</option>
                <option value="si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="descripcion" className="sr-only">
              Descripcion de la mascota
            </label>
            <div className="relative">
              <textarea
                type="tetx"
                name="description"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Descripcion"
                // value={input.race}
              />
            </div>
          </div>

          <div>
            <label htmlFor="Contacto" className="sr-only">
              Numero de contacto
            </label>
            <div className="relative">
              <input
                type="tetx"
                name="contact"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                placeholder="Numero de contacto"
                // value={input.race}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPets;
