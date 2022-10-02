import React from "react";

export default function RenderText({ statusText }) {
  console.log(
    "🚀 ~ file: RenderText.jsx ~ line 4 ~ RenderText ~ statusText",
    statusText
  );
  const text = [
    {
      title: "Mascotas encontradas",
      subtitle:
        "Aquí podrás encontrar las mascotas que buscan a sus dueños o un nuevo hogar. Si encontraste una mascota, publicá un aviso para que su dueño pueda encontrarla.",
    },
    {
      title: "Mascotas perdidas",
      subtitle:
        "Si viste a alguna de estas mascotas, entrá en contacto con su dueño. Podés dejarle un mensaje a través del ChatBot o contactar directamente por teléfono o email.",
    },
    {
      title: "Mascotas en adopción",
      subtitle:
        "Estas mascotas están en adopción, si te interesa adoptar alguna de estas mascotas, contactate con el usuario que realizó la publicación.",
    },
  ];
  const renderText =
    statusText === "perdido"
      ? text[1]
      : statusText === "encontrado"
      ? text[0]
      : text[2];
  return (
    <div className="px-5 my-5 mx-12 flex flex-col gap-5  py-5  ">
      <p className="text-5xl text-gray-700 font-bold ">{renderText.title}</p>
      <p className="text-xl text-gray-500 border-t-4 border-[#FFC700]">
        {renderText.subtitle}
      </p>
    </div>
  );
}
