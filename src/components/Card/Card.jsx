import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data: { name, id, image, gender, age, specie, race } }) => {

	return (
		<Link
			to={'/pets/'+id}
			key={id}
			className="relative bg-[#F4F6F6] text-[#121212] my-8 mx-auto bg-600 max-h-[347px] w-80 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
		>
			<h1 className="text-center py-3 capitalize bg-[#28B0A280] text-[#121212] border-white border-b-2 font-semibold">
				{name ? name : "Mascota"}
			</h1>
			<img
				src={
					image
						? image
						: "https://images-ext-1.discordapp.net/external/NbkNzl5R3HRUApjIYRPJSuoSGAioBpGCaLrcNAxdTds/https/res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
				}
				alt={name}
				className="bg-white h-[213px] w-full object-cover"
			/>
			<span className="absolute top-14 right-2 bg-[#FFC700] p-1 rounded-lg text-[#121212] font-medium capitalize">
				{gender}
			</span>
			<ul className="flex p-2 justify-evenly items-start divide-x divide-[#fff]">
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">especie: </span>
					{specie}
				</li>
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">edad: </span> {age}
				</li>
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">raza: </span> {race}
				</li>
			</ul>
		</Link>
	);
};

export default Card;
