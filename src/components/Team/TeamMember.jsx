import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function TeamMember({ picture, name, role, github, linkedin }) {
  return (
    <div className="flex flex-col p-3 items-center gap-2">
      <div className="image overflow-hidden w-[280px] h-[280px] mx-auto md:h-[200px] md:w-[200px]">
        <img
          className="h-full w-full  mx-auto rounded-full object-cover"
          src={picture}
          alt=""
        />
      </div>
      <h2 className="font-bold text-gray-700">{name}</h2>
      <p className="font-bold text-[#28B0A2]">{role}</p>
      <div className="flex gap-3">
        <a href={linkedin} className="text-gray-500">
          <BsLinkedin />
        </a>
        <a href={github} className="text-gray-500">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
