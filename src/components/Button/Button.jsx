import React from 'react';

const Button = ({path,text}) => {
  return (
    <Link to={path}>
      <p>{text}</p>
    </Link>
  );
}

export default Button;
