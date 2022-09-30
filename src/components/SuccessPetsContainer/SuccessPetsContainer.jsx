import React, { useEffect, useState } from "react";
import { getSuccess } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./SuccessPetsContainer.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";

export default function SuccessPetsContainer() {
	const [firstActive, setFirstActive] = useState("en adopción");
	const dispatch = useDispatch();
	const handleChangeActive = value => {
		setFirstActive(value);
	};

	const successPets = useSelector(state => state.successArr);
	useEffect(() => {
		!successPets.length && dispatch(getSuccess());
		// return () => {
		// 	dispatch(clearSuccess());
		// };
	}, []);
	return (
		<>
			<Link
				to="/home"
				className="absolute w-fit top-[40px] left-[40px] md:top-[60px] md:left-[100px] bg-[#FFD803] text-[#2D334A] font-bold h-fit p-3.5 text-center ml-auto w-full md:w-max rounded"
			>
				Volver
			</Link>
			<section className="flex flex-col h-screen items-center justify-center">
				<h2></h2>
				<div className="flex justify-center">
					<img
						className="w-auto hidden md:block h-[300px] self-center z-50"
						src="https://res.cloudinary.com/dax0wf30d/image/upload/v1664414297/shit/pngwing.com_omh5i3.png"
						alt="perro feliz"
					/>
					<div className="bg-[white] h-[500px] rounded-2xl overflow-hidden shadow-xl">
						<div className="flex w-screen md:w-[500px] h-[56px] justify-evenly">
							<h3
								className={`cursor-pointer h-fit basis-2/4 text-center p-4 border-b-2 border-[#FFC700] transition-colors duration-300 ${
									firstActive === "en adopción"
										? "bg-[#FFC700]"
										: "bg-[white]"
								}`}
								onClick={() =>
									handleChangeActive("en adopción")
								}
							>
								Adopciones
							</h3>
							<h3
								className={`cursor-pointer h-fit basis-2/4 text-center p-4 border-b-2 border-[#FFC700] transition-colors duration-300 ${
									firstActive === "perdido"
										? "bg-[#FFC700]"
										: "bg-[white]"
								}`}
								onClick={() => handleChangeActive("perdido")}
							>
								Encontrados
							</h3>
						</div>
						<ul className="successList min-h-[250px] h-[444px] p-2">
							{successPets.length ? (
								successPets?.filter(
									el => el.status === firstActive
								).length ? (
									successPets
										?.filter(
											el => el.status === firstActive
										)
										.map(el => (
											<li
												key={el.id}
												className="flex bg-[#28B0A280] shadow-md m-2 p-4 rounded shadow-sm items-center"
											>
												<img
													src={el.image}
													className="w-[50px] h-[50px] rounded-sm ml-2"
												/>
												<p className="text-2xl capitalize ml-4 w-3/5">
													{el.name}
												</p>
												<span className="basis-[100px]">
													{el.city}
												</span>
											</li>
										))
								) : (
									<p className="text-center mt-[35%]">
										Esta sección no se encuentra disponible
									</p>
								)
							) : (
								<Spinner />
							)}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
