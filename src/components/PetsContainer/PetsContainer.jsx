import React,{useEffect}from 'react'
import {useParams } from 'react-router-dom'
import Footer from "../Footer/Footer";
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
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default PetsContainer