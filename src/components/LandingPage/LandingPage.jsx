import Login from '../Login/Login'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function LandingPage() {
  const images =  ['https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821915/mascotapps/StockSnap_EJELGQPXN6_dkux6i.jpg','https://res.cloudinary.com/dfbxjt69z/image/upload/v1662831899/mascotapps/StockSnap_LPZFCLQN45_d2wvmc.jpg', 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821916/mascotapps/animals-dogs_3CLDGN47PX_uqeek0.jpg']
  //arreglo de imagenes para el carousel
  //eslint-disable-next-line
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)
  //eslint-disable-next-line
  const selectNewImage = (selectedIndex, images, next=true) => {
    setLoaded(false)
    setTimeout(()=>{
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ?  selectedIndex -1 : images.length - 1
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
    }, 300)
  }
 
  useEffect(()=>{
    const interval = setInterval(()=>{
      selectNewImage(selectedIndex, images)
    }, 1800)
    return () => clearInterval(interval)
  },[selectedIndex, selectedImage])
  
  return (
    <div className='w-full min-h-screen flex h-full md:max-h-screen ease-in duration-300 relative'>
      <img className={loaded ? 'opacity-100 w-full ease-in duration-300 object-cover' : 'w-full  ease-in duration-300 object-cover  opacity-0'} src={selectedImage} alt="" onLoad={()=> setLoaded(true)}/>
      
        <Login />
      
    </div>
  )
}
