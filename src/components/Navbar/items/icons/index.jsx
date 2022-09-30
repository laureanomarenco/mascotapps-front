import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BiStore } from "react-icons/bi";

export default function Icons({ ariaLabel, path, linkStyle, icon, children }) {
  icon === "favoritos" && (icon = <FiHeart />);
  icon === "store" && (icon = <BiStore />);
  return (
    <Link to={path} className={linkStyle} aria-label={ariaLabel}>
      <p className="text-2xl  text-gray-800 hover:text-[#28B0A2]"> {icon}</p>
      {children}
    </Link>
  );
}
