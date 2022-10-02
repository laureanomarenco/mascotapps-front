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
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664671059/pexels-cottonbro-5082561_mrkmah.png"
        />
        <Step
          title="Publicá"
          subtitle="Publicá un aviso, tenes opciones para postear una mascota."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664676180/Screenshot_2022-10-01_at_22-20-37_Mascotapp_jbcebl.png"
        />
        <Step
          title="Ponete en contacto"
          subtitle="Desde el detalle de una mascota podés acceder a los datos del usuario que la publicó."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664678958/contact_ikuulp.png"
        />
        <Step
          title="Lleva tu mascota a casa"
          subtitle="Lleva a tu nueva mascota a casa y calificá al usuario con el que interactuaste."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664679821/pethome_xhqbu9.png"
        />
        <Step
          title="Sumá puntos"
          subtitle="Con cada interacción que tengas con otros usuarios, sumás puntos. Esos puntos podes canjearlos"
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664682700/mascopoints_c10w0o.png"
        />
      </div>
    </div>
  );
}
