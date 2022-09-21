// import { Link } from "react-router-dom";
import React from "react";
// import { LOGIN } from "../../url/url";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}> Login</button>;
};
