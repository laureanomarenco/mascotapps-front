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
          subtitle="Regístrate o inicia sesión para acceder a todas las funcionalidades"
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664671059/pexels-cottonbro-5082561_mrkmah.png"
        />
        <Step
          title="Publica"
          subtitle="Publica un aviso, tenés distintas opciones para hacer más preciso el posteo de una mascota."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664676180/Screenshot_2022-10-01_at_22-20-37_Mascotapp_jbcebl.png"
        />
        <Step
          title="Ponete en contacto"
          subtitle="Desde el detalle de una mascota podrás acceder a los datos del usuario que realizó la publicación."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664678958/contact_ikuulp.png"
        />
        <Step
          title="Lleva tu mascota a casa"
          subtitle="Reúnete y lleva tu mascota a casa. Califica al usuario con el que interactuaste."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664679821/pethome_xhqbu9.png"
        />
        <Step
          title="Suma puntos"
          subtitle="Con cada interacción que tengas con otros usuarios, sumás puntos. Esos puntos podes canjearlos"
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664682700/mascopoints_c10w0o.png"
        />
      </div>
    </div>
  );
}
