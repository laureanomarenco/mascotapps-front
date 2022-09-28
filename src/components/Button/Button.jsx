import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Button = ({path,text,arrow}) => {
  return (
    <Link to={path} className={`bg-[#FFD803] text-[#2D334A] font-bold h-fit p-3.5 text-center ml-auto w-full md:w-max rounded ${arrow ? 'flex flex-row' : ''}`}>
      <p>{arrow && <BiArrowBack />} {text}</p>
    </Link>
  );
}

export default Button;
