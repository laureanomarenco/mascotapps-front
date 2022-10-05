import Login from "../Login/Login";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { visitorsCounter } from "../../store/actions/index";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const {  isLoading } = useAuth0();
  const dispatch = useDispatch();
  const images = [
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821915/mascotapps/StockSnap_EJELGQPXN6_dkux6i.jpg",
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664916557/mascotapps/pexels-pixabay-416160_1_x8t9z7.jpg",
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1662831899/mascotapps/StockSnap_LPZFCLQN45_d2wvmc.jpg",
  ];
  //eslint-disable-next-line
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  const selectNewImage = (selectedIndex, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  useEffect(() => {
    dispatch(visitorsCounter());
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 2500);
    return () => clearInterval(interval);
  }, [selectedIndex, selectedImage, isLoading]);

  return (
    <div className="w-full min-h-screen flex h-full md:max-h-screen ease-in duration-300 relative">
      <img
        className={
          loaded
            ? "opacity-100 w-full ease-in duration-300 object-cover"
            : "w-full  ease-in duration-300 object-cover  opacity-0"
        }
        src={selectedImage}
        alt=""
        onLoad={() => setLoaded(true)}
      />
      <Login />
    </div>
  );
}
