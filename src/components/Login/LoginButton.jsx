import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = ({ className, text, children }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} className={className}>
      {children}
      {text}
    </button>
  );
};
