import React from 'react'
import { NavLink } from 'react-router-dom'

const Links =({style,path,texto, name, functionLink})=> {
  return (
    <NavLink
      className={style}
      name={name} to={path}
      onClick={(e)=>functionLink(e)}
    >
      <p>{texto}</p>
    </NavLink>
  );
}

export default Links