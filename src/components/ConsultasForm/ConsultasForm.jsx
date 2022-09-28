import React, { useState } from "react";
import validate from "./validate.js";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { sendConsultation } from "../../store/actions/index.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ConsultasForm() {
	const { user } = useAuth0();
	const [inputs, setInputs] = useState({
		comment: "",
		email: user?.email ? user.email : "",
	});
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSetInputs = e => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...inputs,
				[e.target.name]: e.target.value,
			})
		);
	};

	const showError = () => {
		Swal.fire({
			title: "Error!",
			text: "verifique los campos",
			icon: "error",
			confirmButtonText: "Ok",
		});
	};
	const showAlert = () => {
		Swal.fire({
			title: "Gracias!",
			text: "Tu consulta fue enviada con éxito",
			icon: "success",
			confirmButtonText: "Ok",
		}).then(result => {
			if (result.isConfirmed) {
				navigate("/account");
			}
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (
			inputs.comment === "" ||
			inputs.email === "" ||
			Object.values(errors).length
		)
			showError();
		else {
			dispatch(sendConsultation(inputs));
			showAlert();
		}
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<form
				onSubmit={e => handleSubmit(e)}
				className="flex flex-col bg-white w-[350px] p-6 gap-4 rounded bg-slate-100 shadow-md"
			>
				<h1 className="text-3xl text-center font-semibold">
					Envianos tu consulta!
				</h1>
				<input
					type="text"
					name="email"
					value={inputs.email}
					onChange={handleSetInputs}
					placeholder="Ingresá tu correo electrónico"
					className="w-full p-4 pr-12 text-sm bg-[#f] rounded-lg shadow-sm"
				/>
				{errors.email && (
					<p className="text-center text-xs text-red-500 mt-1">
						*{errors.email}
					</p>
				)}
				<textarea
					name="comment"
					value={inputs.comment}
					onChange={handleSetInputs}
					id=""
					cols="30"
					rows="10"
					placeholder="Escribí tu mensaje..."
					className="resize-y rounded p-2 shadow"
				/>
				{errors.comment && (
					<p className="text-center text-xs text-red-500 mt-1">
						*{errors.comment}
					</p>
				)}
				<input
					type="submit"
					value="Enviar"
					className="px-6 py-3 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300 cursor-pointer"
				/>
			</form>
		</div>
	);
}
