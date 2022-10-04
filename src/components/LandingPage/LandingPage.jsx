import Login from "../Login/Login";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { visitorsCounter } from "../../store/actions/index";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();
  const images = [
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664914949/mascotapps/pexels-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D0%B0%D1%80-%D1%86%D0%B2%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%9B-1440403_m7sahm.jpg",
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1662821915/mascotapps/StockSnap_EJELGQPXN6_dkux6i.jpg",
    "https://res.cloudinary.com/dfbxjt69z/image/upload/v1664915145/mascotapps/pexels-pixabay-416160_bfph8s.jpg",
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
    }, 200);
  };

  useEffect(() => {
    dispatch(visitorsCounter());
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 2500);
    return () => clearInterval(interval);
  }, [selectedIndex, selectedImage]);

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
