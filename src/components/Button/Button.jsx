import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({path,text}) => {
  return (
    <Link to={path}>
      <p>{text}</p>
    </Link>
  );
}

export default Button;
