import React from "react";

const Button = ({ path, text }) => {
	return (
		<Link
			to={path}
			className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
		>
			<p>{text}</p>
		</Link>
	);
};

export default Button;
