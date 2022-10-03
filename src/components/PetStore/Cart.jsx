import React from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buyItems } from "../../store/actions";
import { tokenAccess } from "../../constants/token";

export default function Cart({ carrito, setCarrito, setUpdate, update }) {
  const { user } = useAuth0();
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myItems = carrito;


  const [compra, setCompra] = useState({
    name: "",
    items: myItems,
    totalPoints: 0,
    mail: user?.email,
    direccion: "",
  });

  function handleChange(e) {
    setCompra({
      ...compra,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...compra,
        [e.target.name]: e.target.value,
      })
    );
  }
  function validate(compra) {
    let errorObj = {};
    if (compra.name.search("[0-9]") !== -1) {
      errorObj.name = "El nombre puede incluir números";
    }
    if (compra.name.search("[^A-Za-z0-9]") !== -1) {
      errorObj.name = "El nombre puede incluir números, símbolos ni espacios";
    }

    return errorObj;
  }
  const totalPoints = carrito?.reduce(
    (acc, item) => acc + parseInt(item.points),
    0
  );
  function handleSubmit(e) {
    e.preventDefault();
    const totalPoints = carrito?.reduce(
      (acc, item) => acc + parseInt(item.points),
      0
    );
    const objAux = {
      ...compra,
      items: myItems,
      totalPoints: totalPoints,
    };
    if (errors.name || errors.contact || errors.direccion) {
      console.log("pone bien los datosssssss");
    } else {
      dispatch(buyItems(objAux, tokenAccess));
      Swal.fire({
        title: "Pedido enviado con éxito",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          setShowModal(false);
          const carritoVacio = [];
          setCarrito(carritoVacio);
          localStorage.setItem("carrito", JSON.stringify(carritoVacio));
          setUpdate(update === "ok" ? "new ok" : "ok");
          navigate("/account");
        }
      });
    }
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button
        onClick={toggleModal}
        className="absolute top-8 right-5 text-teal-600 text-xl flex  items-center"
      >
        {carrito.length}
        <FaShoppingCart />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[500px]  my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Carrito</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {carrito?.length > 0 &&
                    carrito.map((item) => (
                      <div
                        className="flex gap-3 items-center justify-between"
                        key={Math.random()}
                      >
                        <p className="text-gray-600 text-sm">{item.title}</p>
                        <p className="text-gray-600 text-sm">
                          {item.points} Points
                        </p>
                      </div>
                    ))}
                  {totalPoints > 0 && (
                    <p className="italic text-gray-600 text-sm border-t-2 border-[#ecca08] my-3">
                      Total {totalPoints}
                    </p>
                  )}
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto mt-3 mb-0 space-y-2"
                  >
                    <div>
                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="name"
                          placeholder="Nombre de la persona que va a recibir el pedido"
                          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                          value={compra.name}
                        />

                        <span className="absolute inset-y-0 inline-flex items-center right-4">
                          <AiOutlineUserAdd color="grey" />
                        </span>
                      </div>

                      <div className="text-center text-xs text-red-500 mt-1">
                        {!errors.name ? null : <span>*{errors.name}</span>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                          placeholder="Email"
                          value={user?.email}
                          disabled={true}
                        />

                        <span className="absolute inset-y-0 inline-flex items-center right-4">
                          <MdAlternateEmail color="grey" />
                        </span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact" className="sr-only">
                        Dirección de envío
                      </label>

                      <div className="relative">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="direccion"
                          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                          placeholder="Dirección de envío"
                          value={compra.direccion}
                        />

                        <span className="absolute inset-y-0 inline-flex items-center right-4">
                          <FaMapMarkerAlt color="grey" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-[#ecca08] py-2  text-sm font-medium text-black hover:bg-[#ffd903]  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                      >
                        Comprar
                      </button>
                    </div>
                  </form>
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
    </div>
  );
}
