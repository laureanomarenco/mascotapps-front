import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { BsPencilSquare } from "react-icons/bs";
import { RiChatDeleteFill } from "react-icons/ri";
import {BsCheck2Square} from "react-icons/bs"
import { deletePet, publicUserDetail,getMyPets} from "../../store/actions";
import { useState } from "react";
import { useEffect } from "react";
import EndPost from "../Detail/EndPost";
import { tokenAccess } from "../../constants/token";
const BadgesPets = ({
  hidden,
  setHidden,
  setOrder,
  handleActiveEditDog,
  order,
  myPets
}) => {
  const dispatch = useDispatch();
  const [states, setStates] = useState(true);
  const [hiddenEnd,setHiddenEnd]=useState(true)
  const tokenAccess = localStorage.getItem("token");
  const handleClick = (petid, tokenAccess) => {
    dispatch(deletePet(petid, tokenAccess));
    dispatch(getMyPets(tokenAccess));
    setOrder(order === "nowpAPASITO" ? "now" : "nowpAPASITO");
  };
  const myPets = useSelector((state) => state.userPets);
  const userContact = useSelector((state) => state.publicUserDetail);
  useEffect(() => {}, [myPets]);

  const handleHidden = (id)=>{

    setHiddenEnd(hiddenEnd === true? false : true);
    dispatch(publicUserDetail(id))
    console.log("SE Manda la action ")
  }
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
        ? myPets.map((a) => (
            <div
              key={a.id}
              className=" relative border border-gray-300 w-full rounded-lg my-2 shadow-lg "
            >
              <div className="flex items-center p-4">
                <Link to={"/pets/" + a.id}>
                  <img
                    alt="user-img"
                    src={a.image}
                    className="object-cover w-12 h-12 rounded-lg"
                  />
                </Link>
                <div className="ml-3 overflow-hidden">
                  <p className="font-medium text-gray-900">
                    Nombre:{" "}
                    <span className="font-semibold capitalize">{a.name}</span>
                  </p>
                  <p className="max-w-xs text-sm text-gray-500 truncate">
                    Raza: <span className="font-semibold">{a.race}</span>
                  </p>
                </div>
                <div className="flex mx-auto gap-10 ">
                  <p className="text-2xl">
                    <BsPencilSquare
                      onClick={() => handleActiveEditDog(a)}
                      className="cursor-pointer"
                    />
                  </p>
                  <button
                    className="text-2xl "
                    onClick={() => handleClick(a.id, tokenAccess)}
                  >
                    <RiChatDeleteFill color="red" />
                  </button>
                  <p  className="text-2xl">
                  <BsCheck2Square onClick={handleHidden} color="green"/>
                  </p>
                </div>
              </div>
                  <div className="w-full" hidden={hiddenEnd}>
                  <EndPost 
                    user={userContact}
                    hiddenEnd={hiddenEnd}
                    setHiddenEnd={setHiddenEnd}
                    idPet={a.id}/>
                  </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default BadgesPets;
