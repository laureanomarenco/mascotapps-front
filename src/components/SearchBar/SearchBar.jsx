import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchPets } from "../../store/actions";

export default function SearchBar() {
  const [input, setInput] = useState("");
  let dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    dispatch(searchPets(input))
  }

  // function onSubmit(e) {
  //   e.preventDefault();
    
  // }
  return (
    <div className="flex items-center">
      <form>

      <input
        className="sm:w-[400px] h-[35px] w-48  shadow-lg shadow-zinc-200 outline-none font-thin text-xl px-4 "
        placeholder="Buscar..."
        type="text"
        onChange={handleChange}
        value={input}
        ></input>
      <button type='submit' onSubmit={onSubmit}></button>
      </form>
      <button
        className="bg-zinc-100 w-[70px] h-[35px] rounded-lg font-thin shdow-lg  hover:text-indigo-600 hover:border-current"
      >
        <BiSearch className="mx-auto" size="20px" />
      </button>
    </div>
  );
}
