import React from "react";
import { useSelector } from "react-redux";


const BadgesPets = () => {
  const myPets = useSelector((state) => state.userPets);
  return (
    <div className="">
      {myPets?myPets.map((a) => (
            <strong
              className="inline-flex items-center px-16 py-4 bg-gray-100 rounded-full gap-2"
              key={a.id}
            >
              <span className="text-xs font-medium text-gray-900">
                {" "}
                {a.name}{" "}
              </span>
              <img
                alt={`${a.specie}  ${a.race}`}
                src={a.image}
                className="object-cover w-12 h-12 -mr-2 rounded-full"
              />
            </strong>
          ))
        : null}
    </div>
  );
};

export default BadgesPets;
