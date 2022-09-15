import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LhyryGUTOi474cyN5jZI4mhr9cjElNJIlhiGPTKknzHqjSCG0WHiJ60imLn2bOMTATJZ4rGotmC7pJ8goFlJukU00swTcu92P"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  let [amount, setAmount] = useState();
  let [paymentState, setPaymentState] = useState({
    state: null,
    msg: null
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod

      try {
        const result = await axios.post('https://mascotapps-stage.herokuapp.com/checkout', {
          id,
          amount: amount * 100
        })
        console.log(result)

        if(result.data.msg === 'Succesfull payment'){
          setPaymentState({state: 'aproved', msg: result.data.msg})
          elements.getElement(CardElement).clear();
        } else {
          setPaymentState({state: 'rejected', msg: result.data.msg})
        }

      } catch(error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute min-h-screen w-screen bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
      {paymentState.state === null &&
      <>
        <h1 className="flex flex-col w-2/6 mx-auto mt-8 py-3 mb-2 items-center bg-[#28B0A280] text-[#121212] border-solid border-2 rounded font-semibold">Ayudanos a seguir recuperando animales</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-2/6 mx-auto mb-4 items-center">
            <CardElement className="bg-[white] w-full py-6 px-6 my-1 border-solid border-2 rounded"/>
            <input type='number' className="bg-[white] w-full py-6 px-6 my-1 border-solid border-2 rounded" placeholder="Monto de la donación" name='amount' onChange={onInputChange}></input>
            <button className="bg-[#FFC700] py-2 px-20 my-1 border-solid rounded" disabled={!stripe}>Donar</button>
        </form>
      </>
      }
      {
        paymentState.state === 'aproved' && 
        <div className="flex flex-col w-2/6 mx-auto mt-8 px-4 py-8 items-center bg-[#A5B462] font-semibold border-solid rounded">Gracias por tu ayuda!</div>
      }
      { paymentState.state === 'rejected' && 
        <div className="flex flex-col w-2/6 mx-auto mt-8 px-4 py-8 items-center bg-[#E58B78] font-semibold border-solid rounded">{paymentState.msg}</div>
      }
      </div>
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
