import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../store/actions/index";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

export default function CardContainer() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);
  const pets = useSelector((state) => state.pets);
  const searchedPets = useSelector((state) => state.searchedPets);
  console.log(searchedPets)

  useEffect(() => {
    !pets.length && dispatch(fetchPets());
  }, []);
  
  return (
    <div
      className={`${
        loading
          ? "grid gap-1 grid-rows-1 pt-40"
          : "grid gap-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      } grid-cols-1 min-h-[70vh]`}
    >
      {loading ? (
        <Spinner />
      ) : (
        searchedPets.length !== 0 ? 
        searchedPets?.map((pet, i) => <Card key={i} data={pet} />)
        :
        pets?.map((pet) => <Card key={pet.id} data={pet} />)
      )}
    </div>
  );
}