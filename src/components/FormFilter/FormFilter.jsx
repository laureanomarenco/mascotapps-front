import { useSelector } from "react-redux";
import React from "react";

const FormFilter = ({ handleClearFilter, filter, handleFilter }) => {
  const filtered = useSelector((state) => state.filterPets);
  const pets = useSelector((state) => state.statusPets);

  const races =
    filtered.length > 0
      ? filtered?.map((pet) => pet.race)
      : pets.map((pet) => pet.race);

  const resulted = new Set(races);
  const result = Array.from(resulted);

  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 border-0 cursor-pointer rounded-full drop-shadow-md  w-70  duration-300 ">
      <select value={filter.specie} name="specie" onChange={handleFilter}>
        <option hidden>Especie</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="otra especie">Otro</option>
      </select>
      <select value={filter.gender} name="gender" onChange={handleFilter}>
        <option hidden>Genero </option>
        <option value="macho">Macho</option>
        <option value="hembra">Hembra</option>
      </select>
      <select value={filter.age} name="age" onChange={handleFilter}>
        <option hidden>Edad </option>
        <option value="muy joven">Cachorro</option>
        <option value="joven">Joven</option>
        <option value="adulto">Adulto</option>
        <option value="viejo">Viejo</option>
      </select>
      <select value={filter.race} name="race" onChange={handleFilter}>
        <option hidden>Raza </option>
        {result.map((keyPet) => (
          <option key={Math.random()} className="capitalize" value={keyPet}>
            {" "}
            {keyPet}{" "}
          </option>
        ))}
      </select>
      <select>
        <option hidden>Ciudad</option>
      </select>
      <button className="hover:bg-[#28B0A2]" onClick={handleClearFilter}>
        reset
      </button>
    </div>
  );
};

export default FormFilter;
