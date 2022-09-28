import React from "react";
// import { SUCCESS } from "../../url/url";
// GET pets/success  -> devuelve todos los adoptados y encontrados
// GET pets/successAdoptions -> devuelve adoptados
// GET pets/succesFound -> devuelve encontrados

export default function Aaprueba() {
	const [info, setInfo] = React.useState([]);
	const llamado = ()=>{
		fetch('https://juka-production.up.railway.app/pets/success')
		.then(res=>res.json())
		.then(data=> setInfo(data))
	}
	React.useEffect(() => {
		llamado()
	}, []);
	return <div>{JSON.stringify(info)}</div>;
}
