import React from 'react'
// import Alert from './Alert'
import {ImStatsDots} from 'react-icons/im';
import {TbUsers} from 'react-icons/tb';
import {AiOutlineLogout} from 'react-icons/ai';
import {MdPets} from 'react-icons/md'


const NavBar = () => {

  const handleClick = () => {
    alert('¿Cerrar sesión?')
    window.location.replace("/") 
  }

  return (
    <header className='bg-gray-100'>
    <nav className="bg-gray-100 text-[#28B0A2] ">
      <div className="container mx-auto py-4 grid grid-cols-1 justify-items-center md:flex md:justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-300">Admin Dashboard</h1>
        <div className="flex space-x-10">
          <a htmlFor="#general" onClick={() => window.location.replace("/admin#")}  className="flex items-center space-x-2 hover:cursor-pointer">
            <span>
            <ImStatsDots size={20}/>
            </span>
            <span className="text-gray-500 hover:text-[#28B0A2]">General</span>
          </a>
          <a htmlFor="#mascotas" onClick={() => window.location.replace("/admin#mascotas")}className="flex items-center space-x-2 hover:cursor-pointer">
            <span>
            <MdPets size={20}/>
            </span>
            <span className="text-gray-500  hover:text-[#28B0A2]">Mascotas</span>
          </a>
          <a htmlFor="#usuarios" onClick={() => window.location.replace("/admin#usuarios")} className="flex items-center space-x-2 hover:cursor-pointer">
            <span> 
            <TbUsers size={20}/>
            </span>
            <span className="text-gray-500  hover:text-[#28B0A2]">Usuarios</span>
          </a>
        </div>
        <a  className="flex  mt-2 hover:scale-y-100 items-center space-x-2 bg-transparent py-1 px-2 rounded-full hover:bg-yellow-400 hover:text-white hover:cursor-pointer" onClick={handleClick} >
        <span> 
            <AiOutlineLogout size={20}/>
            </span>
            <span className="text-gray-500 ">Cerrar sesión</span>
        </a>
      </div>
    </nav>
  </header>

  )
}

export default NavBar