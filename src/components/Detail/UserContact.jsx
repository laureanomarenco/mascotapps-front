import React from "react";
import { Link } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";

const UserContact = ({ user, hidden, setHidden, idPet }) => {
  return (
    <div
      className="relative border border-gray-300 rounded-lg shadow-lg "
      hidden={hidden}
    >
      <button
        className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1"
        onClick={() => setHidden(hidden === true ? false : true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex items-center p-4">
        <img
          alt="user-img"
          src={
            user.image
              ? user.image
              : "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663934784/mascotapps/mascotapss_jxt9hl.png"
          }
          className="object-cover w-12 h-12 rounded-lg"
        />

        <div className="ml-3 overflow-hidden">
          <p className="font-medium text-gray-900">
            Nombre:{" "}
            <span className="font-semibold capitalize">{user.name}</span>
          </p>
          <p className="max-w-xs text-sm text-gray-500 truncate">
            Zona: <span className="font-semibold">{user.city}</span>
          </p>
        </div>
        <Link to="/profile" state={{ userProf: user , idPet:idPet}}>
          <HiPlusCircle
            className="ml-8 hover:scale-y-110 hover:scale-x-110 cursor-pointer"
            size={28}
          />
        </Link>
      </div>
    </div>
  );
};

export default UserContact;
