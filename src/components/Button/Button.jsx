import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, text, arrow }) => {
	return (
		<Link
			to={path}
			className={`bg-[#FFD803] text-[#2D334A] font-bold h-fit p-3.5 text-center ml-auto w-full md:w-max rounded ${
				arrow ? "flex flex-row" : ""
			}`}
		>
			{text}
		</Link>
	);
};

export default Button;
