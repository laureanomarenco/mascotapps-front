
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/actions/index";
import Card from "../Card/Card";

export default function CardContainer() {
  const dispatch = useDispatch(); 
  const pets = useSelector((state) => state.pets);
  useEffect(() => {
    !pets.length && dispatch(fetchPets());
  }, []);
  return (
    <div className="grid gap-1 grid-cols-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
      {pets.map((pet) => (
        <Card key={pet.id} data={pet} />
      ))}
    </div> 
  );

}
