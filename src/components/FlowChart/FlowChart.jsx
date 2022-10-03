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
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664801948/pexels-cottonbro-5082561_ni6bve.png"
        />
        <Step
          title="Publica"
          subtitle="Publica un aviso, tenés distintas opciones para hacer más preciso el posteo de una mascota."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664801967/postea_bxviwz.png"
        />
        <Step
          title="Ponete en contacto"
          subtitle="Desde el detalle de una mascota podrás acceder a los datos del usuario que realizó la publicación."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664801935/contact_t19mfs.png"
        />
        <Step
          title="Lleva tu mascota a casa"
          subtitle="Reúnete y lleva tu mascota a casa. Califica al usuario con el que interactuaste."
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664801941/pethome_g2nx7z.png"
        />
        <Step
          title="Suma puntos"
          subtitle="Con cada interacción que tengas con otros usuarios, sumás puntos. Esos puntos podes canjearlos"
          image="https://res.cloudinary.com/dpxrr2uyq/image/upload/v1664801954/mascopoints_kmildq.png"
        />
      </div>
    </div>
  );
}
