import React, { useEffect } from 'react'
import {getDetail, resetDetail} from '../../store/actions/index'

import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const pet = useSelector(state => state.pet)
    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(resetDetail())
        }
    }, [id])
  return (
    <div>
        
        {pet ? 
        (<div className='my-7 grid sm:grid-cols-2 sm:gap-6 sm:justify-center mx-auto sm:content-center'>
            <div className='w-full  mx-auto'>
                <div className='md:h-96 md:w-96 rounded-lg overflow-hidden mx-auto drop-shadow-md' >
                    <img src={pet.image} className='w-full h-full object-cover' alt={pet.name}/>   
                </div>
                <div className=' grid w-full  grid-cols-3 gap-1 md:w-96 h-32 mx-auto my-3'>
                    <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                        <img src={pet.image} className='w-full h-full object-cover ' alt={pet.name}/>
                    </div>
                    <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                        <img src={pet.image} className='w-full h-full object-cover ' alt={pet.name}/>
                    </div>
                    <div className="brightness-125 rounded-lg overflow-auto drop-shadow-xl">
                        <img src={pet.image} className='w-full h-full object-cover ' alt={pet.name}/>
                    </div>
                </div>
            </div>
            <div className='text-justify flex flex-col h-full gap-5 px-10 py-3'> 
                <h1 className='text-5xl  text-teal-600 uppercase'>{pet.name}</h1>
                <p className='capitalize'>{pet.gender}</p>
                <p className='capitalize'>{pet.specie}</p>
                <p className='capitalize'>{pet.status}</p>
                <p className='capitalize'>{pet.comments}</p>
                <p className='capitalize'>{pet.race}</p>
                <p className='capitalize'>Contacto</p>
            </div>
        </div>) : (<h1>No Id</h1>)}
        <Footer />
    </div>
  )
}
