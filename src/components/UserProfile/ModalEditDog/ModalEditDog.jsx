import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, getSpecies, postPet } from "../../../store/actions";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import validate from "../../PostPets/validate";

export default function ModalEditDog() {
	const dispatch = useDispatch();
	const PetSpecies = useSelector(state => state.species);
	const { user } = useAuth0();
	const [modal, setModal] = useState(false);
	const [error, setError] = useState({});
	const [input, setInput] = useState({
		name: "",
		specie: "",
		race: "",
		status: "",
		gender: "",
		age: "",
		vaccinationSchemeStatus: "",
		image: "",
		comments: "",
		city: "",
		contact: "",
	});

	const showAlert = () => {
		Swal.fire({
			title: "Gracias!",
			text: "Tu mascota fue guardada con exito",
			icon: "success",
			confirmButtonText: "Ok",
		}).then(result => {
			if (result.isConfirmed) {
				Navigate("/home");
			}
		});
	};
	const showError = () => {
		Swal.fire({
			title: "Error!",
			text: "verifique los campos",
			icon: "error",
			confirmButtonText: "Ok",
		});
	};

	// const upload = async (e) => {
	//   const img = e.target.files[0];
	//   const data = new FormData();
	//   data.append("file", img);
	//   data.append("upload_preset", CLOUD_NAME);
	//   const response = await fetch(
	//     `https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/image/upload`,
	//     { method: "POST", body: data }
	//   );
	//   const dataNew = await response.json();
	//   setInput({
	//     ...input,
	//     image: dataNew.secure_url,
	//   });
	// };

	const cities = useSelector(state => state.cities);
	let localidades = cities
		.sort((a, b) => a.provincia.nombre.localeCompare(b.provincia.nombre))
		.map(word => `${word.nombre}, ${word.provincia.nombre}`);
	const handleSubmit = e => {
		e.preventDefault();
		if (
			error.specie ||
			error.race ||
			error.status ||
			error.gender ||
			error.age ||
			error.vaccinationSchemeStatus ||
			error.image ||
			error.comments ||
			error.city ||
			error.contact
		) {
			showError();
		} else {
			if (input.name === "") {
				setInput({
					...input,
					name: undefined,
				});
			}
			if (input.image === "") {
				setInput({
					...input,
					image: "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png",
				});
			}
			dispatch(postPet(input, user?.sub));
			showAlert();
			setInput({});
		}
	};
	console.log(localidades.length);
	const handleChange = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setError(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	useEffect(() => {
		dispatch(fetchCity());
		dispatch(getSpecies());
	}, [dispatch]);
	return (
		<>
			<button onClick={() => setModal(!modal)}>abrime le modo</button>
			{modal && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Edita los datos de tu mascota
									</h3>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<form
										onSubmit={handleSubmit}
										className="max-w-md mx-auto mt-8 mb-0 space-y-2"
									>
										<input
											type="text"
											name="name"
											placeholder="Nombre"
											value={input.name}
											className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
											onChange={handleChange}
										/>
										<select
											onChange={handleChange}
											className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
											name="specie"
											value={input.specie}
										>
											<option hidden>Especie</option>
											{PetSpecies?.map(especie => (
												<option
													className="capitalize"
													key={Math.random()}
													value={especie}
												>
													{especie}
												</option>
											))}
										</select>
										<input
											type="text"
											name="race"
											placeholder="Raza"
											value={input.race}
											className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
											onChange={handleChange}
										/>
										<div className="flex items-center justify-between">
											<button
												type="submit"
												className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
											>
												Modificar los datos
											</button>
										</div>
									</form>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setModal(!modal)}
									>
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</>
	);
}
