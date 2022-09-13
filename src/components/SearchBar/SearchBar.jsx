import React from 'react'
import {BiSearch}from "react-icons/bi"

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input className='sm:w-[400px] h-[35px] w-48  shadow-lg shadow-zinc-200 outline-none font-thin text-xl px-4 'placeholder="Buscar..." ></input>

      <button className=" bg-zinc-100  w-[70px] h-[35px] rounded-lg font-thin shdow-lg  hover:text-indigo-600 hover:border-current"><BiSearch className='mx-auto' size="20px"/></button>

      </div>
    
  )
}

export default SearchBar