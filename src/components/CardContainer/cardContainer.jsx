import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/actions/index";
import Card from "../Card/Card";

export default function cardContainer() {
	const dispatch = useDispatch();
	const pets = useSelector(state => state.pets);
	useEffect(() => {
		!pets.length && dispatch(fetchPets());
	}, []);
	return (
		<div>
			{pets.map(el => (
				<Card key={el.id} data={el} />
			))}
		</div>
	);
}
