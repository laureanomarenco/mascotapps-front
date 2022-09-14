import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {MdAlternateEmail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const SignUp = () => {
  return (
  
  <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-6 lg:py-12">
  
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Registro de Usuario</h1>
  
        <p className="mt-4 text-gray-500">
          Registrate completando el siguiente formulario y<br></br> 
          accede a todas las funcionalidades de la app!
        </p>
      </div>
  
      <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-2">
        <div>
          <label htmlFor="nombre" className="sr-only">Nombre</label>
  
          <div className="relative">
            <input
              type="text"
              name="nombre"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
              placeholder="Nombre"
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <AiOutlineUserAdd color='grey'/>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Nombre</label>
  
          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Email"
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <MdAlternateEmail color='grey'/>
            </span>
          </div>
        </div>
  
        <div>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Contraseña"
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <RiLockPasswordLine color='grey'/>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="city" className="sr-only">Ciudad</label>
  
          <div className="relative">
            <input
              type="text"
              name="city"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Ciudad"
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <MdOutlineLocationOn color="grey"/>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="contact" className="sr-only">Contacto</label>
  
          <div className="relative">
            <input
              type="text"
              name="contact"
              className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Contacto"
            />
  
            <span className="absolute inset-y-0 inline-flex items-center right-4">
            <AiOutlineWhatsApp color="grey"/>
            </span>
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
            <Link to="/login"><span className='font-medium text-[#007663] hover:text-teal-500'> Inicia Sesión</span></Link>
          </p>
      </form>
    </div>
  
    <div className="relative invisible sm:visible sm:h-96 lg:w-1/2 lg:h-full">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
        alt=""
      />
    </div>
  </section>
  


  )
}

export default SignUp