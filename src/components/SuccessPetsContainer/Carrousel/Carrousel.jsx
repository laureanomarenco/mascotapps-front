import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card.jsx";
import Spinner from "../../Spinner/Spinner";

export default function Carrousel() {
	const pets = useSelector(state => state.pets);
	const loading = useSelector(state => state.isLoading);
	const [randomNum, setRandomNum] = useState(null);
	useEffect(() => {
		!randomNum &&
			setRandomNum(Math.round(Math.random() * (pets.length - 3 - 0) + 0));
	}, []);
	return (
		<section>
			<h3 className="text-center text-2xl font-semibold">
				¡Estas son mascotas perdidas o en adopción!
			</h3>
			<ul
				className={`${
					loading
						? "grid gap-1 grid-rows-1 pt-40"
						: "grid gap-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3"
				} my-6`}
			>
				{loading ? (
					<Spinner />
				) : (
					pets
						.filter(
							el =>
								el.status === "perdido" ||
								el.status === "en adopción"
						)
						.slice(randomNum, randomNum + 3)
						?.map(el => <Card data={el} key={el.id} />)
				)}
			</ul>
		</section>
	);
}
