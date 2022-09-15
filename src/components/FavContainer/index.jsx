import React from 'react'

import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function FavContainer() {
    var corazon = JSON.parse(localStorage.getItem("favoritos")) || []


    return (
        <div className='min-h-[100vh]' >
            <Navbar />
            {corazon.length > 0 ? (
            <div className="grid gap-1 grid-cols-1 gird-rows-2 min-h-[70vh] md:grid-cols-2 xl:gird-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
                { corazon.map((pet) => <Card key={pet.id} data={pet} />)}
            </div>
            ) : (
                 <div className="min-h-[70vh] md:grid-cols-2 xl:gird-cols-3 2xl:grid-cols-3 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
                    <div className="flex flex-col w-2/6 mx-auto mt-8 px-4 py-8 items-center bg-[#A5B462] font-semibold border-solid rounded">
                        No hay nada en favoritos
                    </div>
                </div>
            )}

            <Footer/>
        </div>
  )
}
