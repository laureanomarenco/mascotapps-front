import { Link } from 'react-router-dom'
import React from 'react'

export default function Donations() {
  return (
    <div className='w-full bg-teal-500 my-16 min-h-[600px] md:min-h-[300px] flex justify-between px-5 pt-6 items-baseline relative'>
        <div className='flex flex-col gap-2 text-white'>
            <p className='font-bold text-4xl mb-3'>Doná y colaborá con Mascotapp</p>
            <p>Toda cantidad es de ayuda cuando se trata de donaciones.</p>
            <p>Ayuda a los animales en adopción con tu ayuda hoy!</p> 
            <Link to="/donate" className='px-6 py-2 text-black bg-[#FFC700] hover:bg-[#ffd803] w-fit font-bold rounded-md my-5'>Donar</Link>  
        </div> 
        <div className='absolute w-64 h-72 bottom-0 right-4'>
            <img className='h-full w-full object-cover' src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663115562/mascotapps/purebred-dog-being-cute-in-studio-removebg-preview_nrleea.png" alt="" />
        </div>
    </div>
  )
}
