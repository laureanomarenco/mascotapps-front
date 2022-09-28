import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "../Button/Button";

const stripePromise = loadStripe(
  "pk_test_51LhyryGUTOi474cyN5jZI4mhr9cjElNJIlhiGPTKknzHqjSCG0WHiJ60imLn2bOMTATJZ4rGotmC7pJ8goFlJukU00swTcu92P"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loaded, setLoaded] = useState(false);

  let [paymentData, setPaymentData] = useState({
    amount: null,
    email: null,
  });

  let [paymentState, setPaymentState] = useState({
    state: null,
    msg: null,
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setPaymentData((prev) => {
      const newPayment = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return newPayment;
    });
  };
  const handleSubmit = async (e) => {
    setLoaded(true);
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const result = await axios.post(
          "https://juka-production.up.railway.app/checkout",
          {
            id,
            amount: paymentData.amount * 100,
            email: paymentData.email,
          }
        );

        if (result.data.msg === "Succesfull payment from") {
          setLoaded(false);
          setPaymentState({ state: "aproved", msg: result.data.msg });

          Swal.fire({
            title:
              "Tu donación fue recibida con éxito. Se te envió un mail con los datos del pago. ¡Muchas Gracias!",
            width: 600,
            padding: "3em",
            color: "#716add",
            background:
              "#fff url(https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
          }).then(() => {
            //redireccionar al home
            window.location.href = "/home";
          });

          elements.getElement(CardElement).clear();
        } else {
          setLoaded(false);
          setPaymentState({ state: "rejected", msg: result.data.msg });

          Swal.fire({
            title: `Tu donación fue rechazada.`,
            width: 600,
            padding: "3em",
            color: "#716add",
            background:
              "#fff url(https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full px-3 flex flex-col items-center">
      <Navbar />
      <div className=" py-6 min-h-screen w-screen bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        {paymentState.state === null && (
          <div className="max-w-[500px] mx-auto">
            <div className="flex items-center justify-around ">
              <h1 className="flex  mx-auto py-8 text-center md:text-left text-[#28B0A2] text-lg md:text-2xl rounded font-semibold">
                Ayudanos a seguir recuperando animales
              </h1>
              <img
                src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1664142786/mascotapps/Dise%C3%B1o_sin_t%C3%ADtulo_fyvuum.png"
                alt=""
                className="w-[150px] h-[150px]"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full mx-auto mb-4 items-center"
            >
              <a
                href="https://buy.stripe.com/test_dR615Q1v8cbL3Ju3cc"
                className="flex bg-[#F8EFBA] items-center w-full py-3 px-6 my-1 border-solid border-2 rounded"
              >
                Este formulario es para donar en USD. Si deseas donar en pesos
                argentinos, haz click aquí.
              </a>
              <CardElement className="bg-[white] w-full py-6 px-6 my-1 border-solid border-2 rounded" />
              <input
                type="text"
                className="bg-[white] w-full py-6 px-6 my-1 border-solid border-2 rounded"
                placeholder="Ingresá tu email"
                name="email"
                onChange={onInputChange}
              ></input>
              <input
                type="number"
                className="bg-[white] w-full py-6 px-6 my-1 border-solid border-2 rounded"
                placeholder="Monto de la donación USD"
                name="amount"
                onChange={onInputChange}
              ></input>
              <button
                className="bg-[#FFC700] py-2 px-20 my-1 border-solid rounded"
                disabled={!stripe}
              >
                Donar
              </button>
            </form>
          </div>
        )}
        {loaded && <Spinner />}

        {paymentState.state === "rejected" && (
          <div className="flex flex-col w-2/6 mx-auto mt-8 px-4 py-8 items-center bg-[#E58B78] font-semibold border-solid rounded">
            {paymentState.msg}
            <div className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300">
              <Button path={"/home"} text={"Volver a home"}></Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default function Donate() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
