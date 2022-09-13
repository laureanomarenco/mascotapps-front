import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CardContainer from "../CardContainer/CardContainer.jsx";

export default function Home() {
	return (
		<>
			<Navbar />
			<div>
				<section className="relative py-40 px-4">
					<div className="z-20 relative  grid mt-40 lg:flex lg:justify-around md:flex md:justify-around sm:flex sm:justify-around md:mt-0 ">
						<a
							href="/home"
							className="inline-block py-2 backdrop-brightness-50 text-white hover:text-black border-2 border-yellow-300 text-center hover:bg-yellow-300 font-semibold hover:opacity-100  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg mt-4 px-12 rounded-lg  lg:py-4 md:py-4 md:px-32 md:mt-32 "
						>
							Dar en Adopción
						</a>
						<a
							href="/home"
							className="inline-block py-2 backdrop-brightness-50 text-white hover:text-black border-2 border-yellow-300 text-center hover:bg-yellow-300 font-semibold hover:opacity-100  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg mt-4 px-12 rounded-lg  lg:py-4 md:py-4 md:px-32 md:mt-32"
						>
							Perdí mi Mascota
						</a>

						{/* <a href="/home" className="inline-block bg-indigo-500 text-white no-underline hover:bg-indigo-800 mt-4 px-12 lg:py-4 md:py-4 md:px-32 rounded-lg">Poner en Adopción</a> */}
					</div>

					<div className="absolute inset-0 h-auto z-10 bg-gradient-to-r from-yellow-600 to-gray-100 opacity-100">
						{/* <img src="https://res.cloudinary.com/dyzge4vha/image/upload/v1663047062/pexels-snapwire-46024_dom1vf.jpg" alt="" className="h-full w-full object-fit-cover mix-blend-lighten lg:h-100
    " /> */}
						<video
							className="w-full h-full absolute object-cover"
							src="https://res.cloudinary.com/dyzge4vha/video/upload/v1663047579/pexels-koolshooters-7682708_asouyn.mp4"
							type="video/mp4"
							autoPlay
							muted
							loop
						></video>
					</div>
				</section>
				<CardContainer />
			</div>
			<Footer />
		</>
	);
}
