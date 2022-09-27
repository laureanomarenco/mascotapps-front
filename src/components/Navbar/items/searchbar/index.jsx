import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  styleDiv,
  styleButton,
  styelInput,
  ariaLabel,
  handleClick,
  id,
  type,
  placeholder,
  handleChange,
}) {
  return (
    <div className={styleDiv}>
      <button
        className={styleButton}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        <p className="text-2xl  text-gray-800 hover:text-[#28B0A2] ">
          <FiSearch />
        </p>
      </button>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={styelInput}
      />
    </div>
  );
}
