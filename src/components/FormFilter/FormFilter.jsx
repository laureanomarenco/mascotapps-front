import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPets,filterRace,resetDetail } from "../../store/actions";

const FormFilter = () => {
  const pets=useSelector(state=>state.statusPets)
  const dispatch= useDispatch();
  const [filter,setFilter]=useState({
    specie:"",
    gender:"",
    age:"",
    race:""
  })

  const handleFilter=(e)=>{

    dispatch(filterPets(e.target.value))
      setFilter({
        ...filter,
        [e.target.name]:e.target.value
      })
  }
const handleFilterRace=(e)=>{
  dispatch(filterRace(e.target.value))
  setFilter({
    ...filter,
    race:e.target.name
  })
}
const clear =()=>{
dispatch(resetDetail())
setFilter({
  specie:"",
  gender:"",
  age:"",
  race:""
})
}
  return (
    <div>
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
      <select value={filter.race} onChange={handleFilterRace}>
        <option hidden>Raza </option>
        {pets?.map((pet)=>(
          <option key={pet.id} value={pet.race}>{pet.race}</option>
        ))}
      </select>
      <select>
        <option hidden>Ciudad</option>
      </select>
      <button onClick={clear}>reset</button>
    </div>
  );
};

export default FormFilter;
