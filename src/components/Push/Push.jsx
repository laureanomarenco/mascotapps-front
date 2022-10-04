import React from "react";
import { NavBtn } from "../Navbar/items";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { WEB_PUSH, DESUBSCRIBE } from "../../constants/url";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { myProfile } from "../../store/actions";
import { tokenAccess } from "../../constants/token";

export default function Push({ myProfileData }) {
  const { user } = useAuth0();
  //eslint-disable-next-line
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  //eslint-disable-next-line
  const publicVapidKey =
    "BCwg51aFOCgO2eiv9bYtJio7TZsmk_8nVnsIbVUdpeLjdEy-bygTnkhglxPNJSGM7RM3Qm5oB3cX5-KXniNv2mw";
  function urlBase64ToUint8Array(base64String) {
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
    let register = await navigator.serviceWorker.register(
      "../../../worker.js",
      {
        scope: "/",
      }
    );
    console.log("new service worker registered", register);
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });
    console.log("new subscription", subscription);
    let subscribed = {
      id: user?.sub,
      subscription: subscription,
    };
    //enviando peticion
    let susc = await axios.post(WEB_PUSH, subscribed);
    console.log("🚀 ~ file: Push.jsx ~ line 11 ~ subscribeUser ~ susc", susc);
  };

  function desubscribeUser() {
    let object = {
      id: user?.sub,
    };
    console.log("soy object", object);
    axios.post(DESUBSCRIBE, object);
  }

  async function handleSuscripcion() {
    if (myProfileData && myProfileData?.userProps?.endpoints === null) {
      subscribeUser();
    } else {
      desubscribeUser();
    }
    dispatch(myProfile(tokenAccess));
  }
  useEffect(() => {
    setStatus(myProfileData && myProfileData?.userProps?.endpoints === null);
  }, [dispatch, myProfileData]);
  return !status ? (
    <NavBtn icon="unsubscribe" handleClick={handleSuscripcion} />
  ) : (
    <NavBtn icon="subscribe" handleClick={handleSuscripcion} />
  );
}
