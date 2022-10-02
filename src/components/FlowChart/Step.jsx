import React from "react";

export default function Step({ title, subtitle, image }) {
  return (
    <div className="w-[180px] lg:w-[220px] lg:h-[270px] flex flex-col items-center text-center ">
      <img className="h-[150px] w-[200px] " src={image} alt="" />
      <p className="text-gray-600 font-semibold">{title}</p>
      <p className="text-gray-500 ">{subtitle}</p>
    </div>
  );
}
