import React,{useEffect}from 'react'
import {useParams } from 'react-router-dom'
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import{getPetsByStatus} from "../../store/actions/index"
import { useDispatch,useSelector } from 'react-redux';
const PetsContainer = () => {
const dispatch=useDispatch();
const {status}=useParams();
const pets=useSelector(state=>state.statusPets)
useEffect(()=>{
  dispatch(getPetsByStatus(status))
   console.log(status)
   console.log(pets)
},[])
  return (
    <div>
    <Navbar/>
    <div className=''>
    {pets.length>0? pets?.map(pet=>
      (
       <h2 key={pet.id}>{pet.name}</h2>
      )
    ):<h1>hola papi</h1>}
    </div>
    {/* <Footer/> */}
    </div>
  )
}

export default PetsContainer