import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Fav({id}) {
  const corazon = JSON.parse(localStorage.getItem("favoritos")) || [];
  console.log('este es el corazon ', corazon)
  const [favoritos, setFavoritos] = useState(corazon);
  const [selected, setSelected] = useState(false);

  const addFavorito = (id) => {
    if (favoritos.includes(id)) {
      const newFavorites = favoritos.filter((fav) => fav !== id);
      setFavoritos(newFavorites);
      setSelected(false);
    } else {
      setFavoritos([...favoritos, id]);
      setSelected(true);
    }
  };
  console.log('id maldito ', id)
  console.log('aquiiiiii estas en fav de local storage??', favoritos.filter((fav) => fav.id === id).length > 0)

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos, id, selected]);
  return (
    <div>
      {favoritos.filter((fav) => fav.id === id).length > 0 || selected ? (
        <AiFillHeart
          onClick={() => addFavorito(id)}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => addFavorito(id)}
        />
      )}
    </div>
  );
}
