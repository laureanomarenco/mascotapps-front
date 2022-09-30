import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import RatingStar from "../../RatingStar/RatingStar";

const Calificar = ({
  tdId,
  reviewer_id,
  reviewed_id,
  setOrder,
  transactions,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const objBello = {
    transaction_id: tdId,
    reviewer_id: reviewer_id,
    reviewed_id: reviewed_id,
  };
  const handleClick = () => {
    setShowModal(true);
  };

  console.log("OJOO", objBello);

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
                    ¡Muchas Gracias! Tu feedback es importante para nosotros.{" "}
                    <br /> Recuerda que también podes ayudarnos económicamente.
                  </p>
                  <Link to="/donate">
                    <button className="inline-block px-6 py-2 my-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300">
                      Donar
                    </button>
                  </Link>
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
