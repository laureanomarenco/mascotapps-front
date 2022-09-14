import React from "react";
import { Link } from "react-router-dom";
import GoodDog from "../../svg/GoodDog/GoodDog";

const Error = () => {
	return (
		<div className="min-h-screen min-w-full gap-20 flex items-center justify-center">
			<section className="flex-colunm h-[500px]">
				<img
					className="h-60 mx-auto"
					src="https://images-ext-1.discordapp.net/external/NbkNzl5R3HRUApjIYRPJSuoSGAioBpGCaLrcNAxdTds/https/res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
					alt="logo"
				/>
				<h2 className="uppercase text-7xl text-bold text-center mb-2.5 text-[#2D334A]">
					Ups!
				</h2>
				<p className="font-medium mb-14 text-[#2D334A]">
					Parece que la página que quisiste visitar no existe!
				</p>
				<div className="bg-[#FFD803] text-[#2D334A] font-bold p-3.5 text-center ml-auto w-full md:w-max rounded">
					<Link to={"/"}>Volver al menu</Link>
				</div>
			</section>
			<GoodDog className="hidden xl:block" />
		</div>
	);
};

export default Error;