import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchPets} from '../../store/actions/index';
import {MdPets} from 'react-icons/md'
import {FaHands} from 'react-icons/fa';
import {BsClipboardData} from 'react-icons/bs';
import {AiOutlineLogout} from 'react-icons/ai';
import {GiDogHouse} from 'react-icons/gi';
import {MdImageSearch} from 'react-icons/md';
import {CgSearchFound} from 'react-icons/cg';
import {CgProfile} from 'react-icons/cg';
import {TbUsers} from 'react-icons/tb';
import {TbLockOpenOff} from 'react-icons/tb';
import {FaDonate} from 'react-icons/fa';
import {BsImages} from 'react-icons/bs';
import {BiDonateHeart} from 'react-icons/bi';


const AdminPage = () => {

  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets)

  useEffect(()=> {
    dispatch(fetchPets())   
}, [dispatch])
  
  return (
  <div className='relative'>
    <div className="absolute flex flex-col justify-between w-16 h-screen bg-white border-r">
    <div>
    <div className="inline-flex items-center justify-center w-16 h-16">
      <img src="https://res.cloudinary.com/dyzge4vha/image/upload/v1663024302/cld-sample.jpg" alt="img-perfil" className="block w-14 h-12 bg-gray-200 rounded-xl"/>
    </div>

    <div className="border-t border-gray-100">
      <nav className="flex flex-col p-2">
        <div className="py-4">
          <a
            href=""
            className="flex justify-center px-2 py-1.5 text-gray-500 rounded-xl hover:bg-yellow-200 hover:text-gray-700 group relative"
          >
            <BsClipboardData size="23"/>

            <span
              className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
            >
              General
            </span>
          </a>
        </div>

        <ul className="pt-4 border-t border-gray-100 space-y-1">
          <li>
            <a
              href=""
              className="flex justify-center px-2 py-1.5 text-gray-500 rounded-xl hover:bg-yellow-200 hover:text-gray-700 relative group"
            >
              <TbUsers size="23" />
            </a>
          </li>

          <li>
            <a
              href=""
              className="flex relative group justify-center px-2 py-1.5 text-gray-500 rounded-xl hover:bg-yellow-200 hover:text-gray-700"
            >
              <FaDonate size="23"/>
            </a>
          </li>

          <li>
            <a
              href=""
              className="flex justify-center px-2 py-1.5 text-gray-500 rounded-xl hover:bg-yellow-200 hover:text-gray-700 relative group"
            >
              <MdPets size="23"/>
            </a>
          </li>

          <li>
            <a
              href=""
              className="relative group flex justify-center px-2 py-1.5 text-gray-500 rounded-xl hover:bg-yellow-200 hover:text-gray-700"
            >
              <CgProfile size="23"/>

            </a>
          </li>
        </ul>
      </nav>
    </div>
    </div>

    <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
    <form >
      <button
        type="submit"
        className="flex justify-center w-full  py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group  relative"
      >
        <AiOutlineLogout size="23"/>
      </button>
    </form>
    </div>
    </div>
<div className="md:flex md:gap-12 md:mt-1 md:ml-1">
    <div className="grid grid-cols-1">
    <article className=" flex w-full mt-px mx-16 mt-px items-center p-6 bg-white border  rounded-lg gap-4 sm:justify-between border-2 border-yellow-200 bg-gradient-to-br from-transparent to-yellow-100 ">
      <span className="p-2 text-yellow-500  rounded-full sm:order-last">
        <MdPets size={70}></MdPets>
      </span>

      <div>
        <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-gray-50 to-yellow-500">{pets?pets.length : null}</p>

        <p className="text-medium font-semibold text-gray-500">Mascotas totales</p>
      </div>
    </article>
    
    <article className="flex w-full mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <FaHands size="30"></FaHands>
      </span>

        <p className="text-4xl font-medium text-yellow-600">{pets?(pets.filter(p=> p.status === 'en adopción').length) : null}</p>

        <p className="text-sm text-gray-500">Mascotas en Adopción</p>
     
    </article>
    <article className="flex w-full mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <GiDogHouse size="30"></GiDogHouse>
      </span>

  
        <p className="text-4xl font-medium text-yellow-600">{pets?(pets.filter(p=> p.status === 'adoptado').length) : null}</p>
        <p className="text-sm text-gray-500">Mascotas Adoptadas</p>
      
    </article>
    <article className="flex w-full mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <MdImageSearch size="30"></MdImageSearch>
      </span>

        <p className="text-4xl font-medium text-yellow-600">{pets?(pets.filter(p=> p.status === 'perdido').length) : null}</p>
        <p className="text-sm text-gray-500">Mascotas Perdidas</p>
    </article>
    <article className="flex w-full mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <CgSearchFound size="30"></CgSearchFound>
      </span>

        <p className="text-4xl font-medium text-yellow-600">{pets?(pets.filter(p=> p.status === 'encontrado').length) : null}</p>
        <p className="text-sm text-gray-500">Mascotas Encontradas</p>
    </article>
    </div>
    <div className="grid grid-cols-1">
    <article className=" flex w-100 mt-px mx-16 mt-px items-center p-6 bg-white border  rounded-lg gap-4 sm:justify-between border-2 border-yellow-200 bg-gradient-to-br from-transparent to-yellow-100 ">
      <span className="p-2 text-yellow-500  rounded-full sm:order-last">
        <TbUsers size={70}></TbUsers>
      </span>

        <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-gray-50 to-yellow-500">136</p>

        <p className="text-medium font-semibold text-gray-500">Usuarios registrados</p>
    </article>
    
    <article className="flex w-100 mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <BsImages size="30"></BsImages>
      </span>

        <p className="text-4xl font-medium text-yellow-600">34</p>

        <p className="text-sm text-gray-500">Usuarios han publicado</p>
     
    </article>
    <article className="flex w-100 mt-px mx-16 items-center p-2 bg-gray-50 border border-gray-200 rounded-lg gap-4 sm:justify-between transform transition duration-200 hover:translate-x-12 hover:bg-gradient-to-br from-transparent to-yellow-100  hover:text-grey-50 ">
      <span className="p-3 text-gray-600 bg-gray-100 rounded-full sm:order-last">
        <TbLockOpenOff size="30"></TbLockOpenOff>
      </span>


        <p className="text-4xl font-medium text-yellow-600">{136-34}</p>
        <p className="text-sm text-gray-500">Usuarios no han publicado</p>
      
    </article>
    <article className=" flex w-100 mt-px mx-16 mt-px items-center p-6 bg-white border  rounded-lg gap-4 sm:justify-between border-2 border-yellow-200 bg-gradient-to-br from-transparent to-yellow-100 ">
      <span className="p-2 text-yellow-500  rounded-full sm:order-last">
        <BiDonateHeart size={70}></BiDonateHeart>
      </span>

      <div>
        <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-gray-50 to-yellow-500">$10.300</p>

        <p className="text-medium font-semibold text-gray-500">Donaciones</p>
      </div>
    </article>
    <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png" alt="" className='absolute w-80  right-0 mt-40' />
    </div>
    </div>
  </div>
  )
}

export default AdminPage