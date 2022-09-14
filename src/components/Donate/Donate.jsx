import React from "react";
import Navbar from "../Navbar/Navbar";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod); // este id hay que mandarlo al back
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute min-h-screen w-screen bg-[url('https://res.cloudinary.com/dax0wf30d/image/upload/v1663115601/shit/bg-5_nbb3sj.png')]">
        <form onSubmit={handleSubmit} className="flex flex-col w-2/6 mx-auto my-4 items-center">
            <CardElement className="bg-[white] w-full py-6 px-6  border-solid border-2 rounded"/>
            <button type='submit' className="bg-[#FFC700] py-1 px-2 border-solid rounded">Donar</button>
        </form>
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
