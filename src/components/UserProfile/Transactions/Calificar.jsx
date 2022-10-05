import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { donatePoints } from "../../../store/actions";
import { tokenAccess } from "../../../constants/token";
import { useSelector } from "react-redux";
import RatingStar from "../../RatingStar/RatingStar";
import Swal from "sweetalert2";

const Calificar = ({
  tdId,
  reviewer_id,
  reviewed_id,
  setOrder,
  transactions,
  puntos,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [pointsToDonate, setPointsToDonate] = React.useState(0);
  const dispatch = useDispatch();
  const messageOfDonation = useSelector((state) => state.stateDonationPoints);

  const objBello = {
    transaction_id: tdId,
    reviewer_id: reviewer_id,
    reviewed_id: reviewed_id,
  };
  const handleClick = () => {
    setShowModal(true);
  };
  const handleChange = (e) => {
    if (e.target.value <= puntos) {
      setPointsToDonate(e.target.value);
    } else {
      Swal.fire({
        icon: "error",
        title: "Puntos insuficientes...",
        text: "No tenés tantos puntos para donar!",
      });
    }
  };

  const onSubmit = () => {
    const body = {
      pointsToDonate,
      idToDonate: reviewed_id,
    };

    dispatch(donatePoints(body, tokenAccess));
    Swal.fire({
      title: `${messageOfDonation}`,
    })
  }



  return (
    <>
      <button
        className="  text-yellow-500 flex items-center gap-1 capitalize  px-4 py-3 rounded hover:text-yellow-600 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleClick}
      >
        <AiFillStar size={22} />
        <span>Calificar</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="mx-auto justify-center p-5 border-b border-solid border-slate-200 rounded-t text-center items-center">
                  <h3 className=" text-3xl w-full mb-2 font-semibold">
                    Califica al usuario
                  </h3>
                  <p>
                    ¡Gracias! Tu feedback es importante para nosotros.
                    <br />
                    Recuerda que podés{" "}
                    <a
                      href="https://mascotapps.vercel.app/donate"
                      className="font-bold text-amber-400"
                    >
                      donar
                    </a>{" "}
                    a Mascotapp y{" "}
                    {/* <Link to="/donate">
                    <button className="flex inline-block justify-center px-6 py-2 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300">
                      Donar
                    </button>
                  </Link> */}
                    <br /> también podés transferirle puntos a este usuario.
                  </p>
                  <input
                    type="number"
                    name="pointsToDonate"
                    onChange={handleChange}
                    className="p-2 pr-12 text-sm border-gray-200 rounded-lg shadow-xl"
                    value={pointsToDonate}
                  ></input>
                  <button
                    onClick={onSubmit}
                    placeholder="Cantidad de puntos..."
                    className="inline-block px-6 py-2 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                  >
                    Enviar puntos
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6 flex-auto">
                  <RatingStar
                    objBello={objBello}
                    setShowModal={setShowModal}
                    setOrder={setOrder}
                    transactions={transactions}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Calificar;
