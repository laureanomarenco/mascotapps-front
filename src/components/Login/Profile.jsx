import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0()
    console.log('aca estoy usuario',user)
    if(isLoading){
        return <div> Cargando...</div>
    }
  return (
    isAuthenticated && (<div>
        <img src={user.picture} alt={user.name}/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>)
  )
}

export default Profile