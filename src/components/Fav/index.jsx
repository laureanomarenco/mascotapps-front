import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";



export default function Fav({ pet }) {
  var corazon = JSON.parse(localStorage.getItem("favoritos")) || []

  const [favoritos, setFavoritos] = useState(corazon);
  const [selected, setSelected] = useState(false);


  const addFavorito = (pet) => {
    if (!selected) {
      setFavoritos([...favoritos, pet]);
      setSelected(true);

    } else {
      const newF =favoritos.filter((fav) => fav.id !== pet.id)
      setFavoritos(newF);
      setSelected(false);
    }
  };
  useEffect(() => {

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    if(favoritos.filter(e=>e.id === pet.id).length > 0 ){
      setSelected(true)
    }

  }, [favoritos, pet.id]);
  return (
    <div>
      {  selected ? (
        <AiFillHeart
          onClick={() => addFavorito(pet)}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => addFavorito(pet)}
        />
      )}
    </div>
  );
}
