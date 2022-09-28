import React from "react";

export default function TextRender({ post }) {
  //eslint-disable-next-line
  const found = [
    {
      main: "Te dejamos unos tips para que puedas encontrar a los dueños:",
      text1: "Sé lo más especifico posible en los datos.",
      text2: "Comparte la publicación en tus redes sociales.",
      text3: "Trata de poner una foto clara del animal.",
      text4: "Intentá ser específico en la ubicación.",
      text5:
        "Si no encontrás a los dueños, acercate a una protectora para más difusión.",
    },
  ];
  const lost = [
    {
      main:
        "Te deseamos mucha suerte en tu búsqueda y te dejamos algunos consejos:",
      text1: "Sé lo más especifico posible en los datos.",
      text2: "Comparte la publicación en tus redes sociales.",
      text3: "Trata de poner una foto clara del animal.",
      text4: "Intentá ser específico en la ubicación, el momento y lugar donde se extravió.",
      text5:
        "Explayate en los comentarios, describí cómo se comporta el animal, si tenía algun collar o atributo particular.",
    },
  ];
  const adoption = [
    {
      main: "Esperamos que pronto aparezca una familia para adoptar:",
      text1: "Sé lo más especifico posible en los datos de edad y vacunación.",
      text2: "Comparte la publicación en tus redes sociales.",
      text3: "Trata de poner una foto clara del animal.",
      text4: "Intentá ser específico en la ubicación y condiciones de adopción.",
      text5:
        "Te deseamos mucho éxito!.",
    },
  ];
  //eslint-disable-next-line
  const render = post === 1 ? found : post === 2 ? lost : adoption;
  return (
    <div className="w-md md:w-full max-w-[600px] mx-auto mt-4 ">
      <p className="mt-4 font-bold mb-5  text-gray-500">{render[0].main}</p>
      <p className="text-gray-500">
        {render[0].text1} {render[0].text2}
      </p>
      <p className="text-gray-500">
        {render[0].text3} {render[0].text4}
      </p>
      <p className="mt-4 text-gray-500">{render[0].text5}</p>
    </div>
  );
}
