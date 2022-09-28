import React, { useState } from "react";
import { NavBtn } from "../Navbar/items";
import axios from "axios";
//import { useAuth0 } from "@auth0/auth0-react";
import { WEB_PUSH } from "../../url/url";

export default function Push() {
  //const { user } = useAuth0();
  const [subscribed, setSubscribed] = useState(false);
  //eslint-disable-next-line
  const publicVapidKey = "BBdVJOoIKvsEDiJcbrNBuakK2qOotO8f7j4mTfiAk25SH8z0OQcxKlkUb3NJnetnMy5DYk0d0Ns2ffC69zfcGrE";
  function urlBase64ToUint8Array(base64String) {
    console.log("entre a url64")
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  //eslint-disable-next-line
  const subscribeUser = async () => {
    //service worker
    let register = await navigator.serviceWorker.register("../../../worker.js",{scope: "/"});
    console.log("new service worker registered", register);
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });
    console.log("new subscription", subscription);

    //enviando peticion
    let susc = await axios.post(WEB_PUSH,subscription);
    console.log("🚀 ~ file: Push.jsx ~ line 11 ~ subscribeUser ~ susc", susc);
  };

  function handleSuscripcion() {
    if (!subscribed) {
       subscribeUser();
    }
    setSubscribed(!subscribed);
  }
  return subscribed ? (
    <NavBtn icon="unsubscribe" handleClick={handleSuscripcion} />
  ) : (
    <NavBtn icon="subscribe" handleClick={handleSuscripcion} />
  );
}
