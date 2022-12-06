import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={REACT_APP_DOMAIN}
    clientId={REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    cacheLocation="localstorage"
    audience="https://juka-production.up.railway.app/"
  >
    <Provider store={store}>
      <App className="font-sans" />
    </Provider>
  </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
