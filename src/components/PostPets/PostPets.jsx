import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineCamera } from "react-icons/ai";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { fetchCity, getSpecies, postPet } from "../../store/actions";
import validate from "./validate";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import Button from "../Button/Button"

const PostPets = () => {
	const { user } = useAuth0();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const Petspecies = useSelector(state => state.species);
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

	//CLOUDINARY-------------------------------------
	//eslint-disable-next-line

	const CLOUD_NAME = "imagenes";
	const UPLOAD_PRESET = "dpxrr2uyq";

	const upload = async e => {
		const img = e.target.files[0];
		const data = new FormData();
		data.append("file", img);
		data.append("upload_preset", CLOUD_NAME);
		const response = await fetch(
			`https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/image/upload`,
			{ method: "POST", body: data }
		);
		const dataNew = await response.json();
		setInput({
			...input,
			image: dataNew.secure_url,
		});
		// reemplazar con un mensaje de éxito o la acción deseada
	};
	//-------------------------------------------------------------
	//CIUDADES ARG
	const cities = useSelector(state => state.cities);

	let localidades = cities?.map(loc => {
		return {
			nombre: loc.nombre,
			provincia: loc.provincia.nombre,
		};
	});
	localidades = localidades
		.sort((a, b) => a.provincia - b.provincia)
		.map(l => `${l.nombre}, ${l.provincia}`);
	//-------------------------------------------------------------------------------------------------------------------

	const showAlert = () => {
		Swal.fire({
			title: "Gracias!",
			text: "Tu mascota fue guardada con exito",
			icon: "success",
			confirmButtonText: "Ok",
		}).then(result => {
			if (result.isConfirmed) {
				navigate("/home");
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

	//VALIDACIONES

	//-------------------------------------------

	//+ MANEJO DE ERROREESSSSSSSSSSS
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

	useEffect(() => {
		dispatch(fetchCity());
		dispatch(getSpecies());
	}, [dispatch]);
	return (
		<div className="relative flex flex-wrap lg:h-screen lg:items-center ">
			<div className="w-full px-4 py-12 lg:w-1/2 sm:px-4 lg:px-4 sm:py-6 lg:py-12 ">
				<div className="max-w-lg mx-auto text-center ">
					<h1 className="text-2xl font-bold sm:text-3xl">
						Postea una mascota
					</h1>

					<p className="mt-4 text-gray-500">
						Si perdiste, encontraste o queres dar en adopcion a una
						mascota
						<br></br>
						completa el siguente formulario!
					</p>
				</div>

				<form className="max-w-md mx-auto mt-8 mb-0 space-y-2 p-6 border border-1 border-[#ecca08]">
					<div>
						<label htmlFor="nombre" className="sr-only">
							Nombre
						</label>
						<div className="relative">
							<input
								onChange={handleChange}
								type="text"
								name="name"
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
								placeholder="Nombre"
								value={input.name}
							/>
						</div>
						<div className="text-center text-xs mt-1">
							{!error.name ? (
								<span className="text-black">
									Si no sabes el nombre deja el campo vacio*
								</span>
							) : (
								<span className="text-red-500">
									*{error.name}
								</span>
							)}
						</div>
					</div>

					<div>
						<label htmlFor="especie" className="sr-only">
							Especie
						</label>
						<div className="relative">
							<select
								onChange={handleChange}
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
								name="specie"
								value={input.specie}
							>
								<option hidden>Especie</option>
								{Petspecies?.map(pSpecies => (
									<option
										className="capitalize"
										key={Math.random()}
										value={pSpecies}
									>
										{pSpecies}
									</option>
								))}
							</select>
						</div>
						<div className="text-center text-xs text-red-500 mt-1">
							{!error.specie ? null : (
								<span>*{error.specie}</span>
							)}
						</div>
					</div>

					<div>
						<label htmlFor="Raza" className="sr-only">
							Raza
						</label>
						<div className="relative">
							<input
								onChange={handleChange}
								type="tetx"
								name="race"
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
								placeholder="Raza"
								value={input.race}
							/>
						</div>
						<div className="text-center text-xs text-red-500 mt-1">
							{!error.race ? null : <span>*{error.race}</span>}
						</div>
					</div>

					<div className="md:flex md:w-full md:gap-[10px] md:justify-evenly ">
						<div className=" md:w-1/2">
							<label htmlFor="estado" className="sr-only">
								Estado
							</label>
							<div className="relative w-full ">
								<select
									onChange={handleChange}
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									name="status"
									value={input.status}
								>
									<option hidden>Estado</option>
									<option value="perdido">Perdido</option>
									<option value="en adopción">
										Adopcion
									</option>
									<option value="encontrado">
										Encontrado
									</option>
								</select>
							</div>
							<div className="text-center text-xs text-red-500 mt-1">
								{!error.status ? null : (
									<span>*{error.status}</span>
								)}
							</div>
						</div>

						<div className=" md:w-1/2">
							<label htmlFor="genero" className="sr-only">
								Género
							</label>
							<div className="relative basis-2/4">
								<select
									onChange={handleChange}
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									name="gender"
									value={input.gender}
								>
									<option hidden>Genero</option>
									<option value="macho">Macho</option>
									<option value="hembra">Hembra</option>
								</select>
							</div>
							<div className="text-center text-xs text-red-500 mt-1">
								{!error.gender ? null : (
									<span>*{error.gender}</span>
								)}
							</div>
						</div>
					</div>

					<div className="md:flex md:w-full md:gap-[10px] md:justify-evenly">
						<div className=" md:w-1/2">
							<label htmlFor="edad" className="sr-only">
								Estado
							</label>
							<div className="relative">
								<select
									onChange={handleChange}
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									name="age"
									value={input.age}
								>
									<option hidden>Edad</option>
									<option value="muy joven">Cachorro</option>
									<option value="joven">Joven</option>
									<option value="adulto">Adulto</option>
									<option value="viejo">Adulto Mayor</option>
									<option value="desconocido">
										Desconocido
									</option>
								</select>
							</div>
							<div className="text-center text-xs text-red-500 mt-1">
								{!error.age ? null : <span>*{error.age}</span>}
							</div>
						</div>

						<div className=" md:w-1/2">
							<label htmlFor="vacunacion" className="sr-only">
								Carnet de vacunacion
							</label>
							<div className="relative">
								<select
									onChange={handleChange}
									className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
									name="vaccinationSchemeStatus"
									value={input.vaccinationSchemeStatus}
								>
									<option hidden>Vacunacion</option>
									<option value="completo">Completo</option>
									<option value="incompleto">
										Incompleto
									</option>
									<option value="desconocido">
										Desconocido
									</option>
								</select>
							</div>
							<div className="text-center text-xs text-red-500 mt-1">
								{!error.vaccinationSchemeStatus ? null : (
									<span>
										*{error.vaccinationSchemeStatus}
									</span>
								)}
							</div>
						</div>
					</div>

					<div>
						<label htmlFor="image" className="sr-only">
							Imagen
						</label>

						<div className="relative">
							<input
								type="file"
								accept=".png, .jpg, .jpeg"
								name="image"
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
								placeholder="Imagen"
								onChange={upload}
							></input>

							<span className="absolute inset-y-0 inline-flex items-center right-4">
								<AiOutlineCamera color="grey" />
							</span>
						</div>

						<div className="text-center text-xs text-red-500 mt-1">
							{!error.email ? null : <span>*{error.email}</span>}
						</div>
					</div>

					<div>
						<label htmlFor="descripcion" className="sr-only">
							Descripcion de la mascota
						</label>
						<div className="relative">
							<textarea
								onChange={handleChange}
								type="text"
								name="comments"
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
								placeholder="Descripcion de la mascota..."
								value={input.comments}
							/>
						</div>
						<div className="text-center text-xs text-red-500 mt-1">
							{!error.comments ? null : (
								<span>*{error.comments}</span>
							)}
						</div>
					</div>

					<div>
						<div className="relative">
							<Autocomplete
								onChange={(event, value) =>
									setInput({ ...input, city: value })
								}
								disablePortal
								id="combo-box-demo"
								options={localidades}
								sx={{ width: 1, borderRadius: 16, border: 0 }}
								renderInput={params => (
									<TextField
										{...params}
										label="Provincia, localidad ..."
										name="city"
									/>
								)}
							/>
						</div>

						<div className="text-center text-xs text-red-500 mt-1">
							{!error.city ? null : <span>*{error.city}</span>}
						</div>
					</div>

					<div>
						<label htmlFor="contact" className="sr-only">
							Contacto
						</label>

						<div className="relative">
							<input
								onChange={handleChange}
								type="text"
								name="contact"
								className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
								placeholder="Contacto"
								value={input.contact}
							/>

							<span className="absolute inset-y-0 inline-flex items-center right-4">
								<AiOutlineWhatsApp color="grey" />
							</span>
						</div>
						<div className="text-center text-xs text-red-500 mt-1">
							{!error.contact ? null : (
								<span>*{error.contact}</span>
							)}
						</div>
					</div>

					<div className="flex w-full gap-[10px] justify-between ">
						<div className="flex items-center basis-2/4 justify-between">
							<button
								onClick={handleSubmit}
								type="submit"
								className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
							>
								Postear
							</button>
						</div>
						<div className="flex items-center basis-2/4 justify-between">
							<button
								onClick={() => navigate("/home")}
								type="submit"
								className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
							>
								Volver al inicio
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="relative  sm:h-96 lg:w-1/2 lg:h-full">
				<img
					className="absolute inset-0 object-cover w-full h-full"
					src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663007100/mascotapps/mascotapss_zihxad.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default PostPets;
