import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsBell, BsBellSlash } from "react-icons/bs";
import {IoCloseOutline} from "react-icons/io5"

export default function NavBtn({ ariaLabel, handleClick, btnStyle, icon }) {
  icon === "menu" && (icon = <FiMenu />);
  icon === "subscribe" && (icon = <BsBell />);
  icon === 'unsubscribe' && (icon = <BsBellSlash />);
  icon === 'close' && (icon = <IoCloseOutline/>)
  return (
    <button aria-label={ariaLabel} onClick={handleClick} className={btnStyle}>
      <p className="text-2xl hover:text-[#28B0A2] ">{icon}</p>
    </button>
  );
}
