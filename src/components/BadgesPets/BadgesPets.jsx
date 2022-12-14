import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux";
import { BsPencilSquare, BsCheck2Square } from "react-icons/bs";
import { RiChatDeleteFill } from "react-icons/ri";
import { deletePet, publicUserDetail, getMyPets } from "../../store/actions";
import EndPost from "../Detail/EndPost";



const BadgesPets = ({
  hidden,
  setHidden,
  setOrder,
  handleActiveEditDog,
  order,
  myPets,
}) => {
  const tokenAccess = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [hiddenEnd, setHiddenEnd] = useState(myPets.map(el=>el.id).reduce((obj,prop)=>{
    if(!obj[prop]) obj[prop] = false;
    return obj
  },{}));
  const handleClick = (petid, tokenAccess) => {
    dispatch(deletePet(petid, tokenAccess));
    dispatch(getMyPets(tokenAccess));
    setOrder(order === "nowpAPTO" ? "now" : "nowpAPTO");};

  const userContact = useSelector((state) => state.publicUserDetail);
  useEffect(() => {

  }, [myPets]);

  const showAlert=(id)=>{
    swal.fire({
      title:"Estas seguro de borrar la mascota?",
      text:"Si la borras se perdera todos los datos relacionado con la mascota",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result)=>{
      if(result.isConfirmed){
        handleClick(id,tokenAccess)
        swal.fire(
          'Mascota borrada!',
          'Tu mascota fue borrada con exito!',
          'success'
        )
      }
    })
  }
  const handleHidden = (id) => {
    setHiddenEnd({...hiddenEnd,
      [id]:!hiddenEnd[id]
    })
    // setHiddenEnd(hiddenEnd === true ? false : true);
    dispatch(publicUserDetail(id));
  };

  useEffect(()=>{
    console.log(hiddenEnd)
  },[hiddenEnd])


  return (
    <div
      className="flex flex-col items-start gap-5 grid-rows-1 py-5 px-5 md:grid md:grid-cols-2 xl:grid-cols-3 w-full relative border border-gray-300  rounded-lg my-2 shadow-lg  "
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
              className={`relative border border-gray-300 w-full rounded-lg my-2 shadow-lg ${
                a.postStatus === "concretado" || a.postStatus === "cancelado"
                  ? "grayscale-[100%] "
                  : ""
              }`}
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
                <div className="flex mx-auto gap-3 items-center">
                  <p className="text-xl">
                    <BsPencilSquare
                      onClick={() => handleActiveEditDog(a)}
                      className="cursor-pointer"
                    />
                  </p>
                  <button
                    className="text-2xl "
                    onClick={()=>showAlert(a.id)}
                  >
                    <RiChatDeleteFill color="red" />
                  </button>
                  <p name={"kk"} onClick={()=>handleHidden(a.id)}
                    className={`text-xl ${
                      a.postStatus === "concretado" ||
                      a.postStatus === "cancelado"
                        ? "hidden"
                        : ""
                    }`}
                  >
                    <BsCheck2Square  color="green" />
                  </p>
                </div>
              </div>
              {
                hiddenEnd[a.id] &&
                <div className="w-full mty-2">
                  <EndPost
                    user={userContact}
                    handleHidden={handleHidden}
                    idPet={a.id}
                    />
                </div>
              }
            </div>
          ))
        : null}
    </div>
  );
};

export default BadgesPets;
