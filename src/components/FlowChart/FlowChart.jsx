import Step from "./Step";
import React from "react";

export default function FlowChart() {
  return (
    <div className="bg-white py-4 my-8">
      <p className="text-center my-8 text-4xl font-bold">
        Cómo funciona Mascotapp
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center w-full sm:max-w-[550px] md:max-w-[750px] lg:max-w-full lg:justify-around mx-auto">
        <Step
          title="Logueate"
          subtitle="Registrate o inicia sesión para acceder a todas las funcionalidades"
          image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
        />
        <Step
          title="Publicá"
          subtitle="Publicá un aviso, tenes opciones para postear una mascota."
          image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
        />
        <Step
          title="Ponete en contacto"
          subtitle="Desde el detalle de una mascota podés acceder a los datos del usuario que la publicó."
          image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
        />
        <Step
          title="Lleva tu mascota a casa"
          subtitle="Lleva a tu nueva mascota a casa y calificá al usuario con el que interactuaste."
          image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
        />
        <Step
          title="Sumá puntos"
          subtitle="Con cada interacción que tengas con otros usuarios, sumás puntos. Esos puntos podes canjearlos"
          image="https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png"
        />
      </div>
    </div>
  );
}
