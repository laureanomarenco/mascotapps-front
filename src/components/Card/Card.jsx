import React from "react";

const Card = ({ data: { name, id, image, gender, age, specie, status } }) => {
	return (
		<section
			key={id}
			className="relative bg-[#002B5B] text-white my-8 mx-auto bg-600 w-80 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
		>
			<h1 className="text-center py-3 border-white border-b-2 font-semibold">
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
			<span className="absolute top-14 right-2 bg-[#fde68a] p-1 rounded-lg text-[#002B5B] font-medium capitalize">
				{gender}
			</span>
			<ul className="flex p-2 justify-evenly items-center divide-x divide-[#fff]">
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">especie: </span>
					{specie}
				</li>
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">edad: </span> {age}
				</li>
				<li className="w-full block text-center capitalize">
					<span className="block text-center font-bold">raza: </span> {status}
				</li>
			</ul>
		</section>
	);
};

export default Card;
