import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { HiPlusCircle } from "react-icons/hi";
import {BsPencilSquare} from "react-icons/bs"
import {RiChatDeleteFill} from "react-icons/ri"
import { deletePet, updatePet } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";

const BadgesPets = ({ user_props, hidden, setHidden }) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const handleClick = (petid) => {
    console.log(petid);
    dispatch(deletePet(user_props, petid));
  };

  const myPets = useSelector((state) => state.userPets);
  return (
    <div
      className="flex flex-col items-center gap-5 grid-rows-1 py-5 px-5 md:grid md:grid-cols-2 xl:grid-cols-3 w-full relative border border-gray-300  rounded-lg my-2 shadow-lg  "
      hidden={hidden}
    >
      <button
        className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1"
        onClick={() => setHidden(hidden === true ? false : true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {myPets
        ? myPets.map((pet) => (
          <div key={pet.id} className=" relative border border-gray-300 w-full rounded-lg my-2 shadow-lg ">
              <div className="flex items-center p-4">
              <Link  to={'/pets/'+pet.id}>
                <img
                  alt="user-img"
                  src={pet.image}
                  className="object-cover w-12 h-12 rounded-lg"
                />
                </Link>
                <div className="ml-3 overflow-hidden">
                  <p className="font-medium text-gray-900">
                    Nombre:{" "}
                    <span className="font-semibold capitalize">{pet.name}</span>
                  </p>
                  <p className="max-w-xs text-sm text-gray-500 truncate">
                    Raza: <span className="font-semibold">{pet.race}</span>
                  </p>
                </div>
                  <div className="flex mx-auto gap-10 ">
                    <p className="text-2xl  ">
                    <BsPencilSquare className="cursor-pointer" onClick={()=>dispatch(updatePet(user,pet))}/>
                    </p>
                    <p className="text-2xl "
                    onClick={()=>handleClick(pet.id)}>
                    <RiChatDeleteFill color="red" className="cursor-pointer"/>
                    </p>
                  </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default BadgesPets;
