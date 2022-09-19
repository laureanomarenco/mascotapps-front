import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetsContainer from "./components/PetsContainer/PetsContainer";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Error from "./components/Error/Error";
import LoginAdmin from "./components/AdminPage/LoginAdmin";
import AdminPage from "./components/AdminPage/AdminPage";
import React from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import { fetchPets } from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Donate from "./components/Donate/Donate";
import FavContainer from "./components/FavContainer";
import UsersPublicProfile from "./components/UsersPublicProfile/UsersPublicProfile";
import PostPets from "./components/PostPets/PostPets";
function App() {
  //eslint-disable-next-line
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
    <div className=".App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/account" element={<UserProfile />} />
          <Route path="/pets/:id" element={<Detail />} />
          <Route path="/estado/:status" element={<PetsContainer />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/general" element={<AdminPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<Error />} />
          <Route path="/favoritos" element={<FavContainer />}></Route>
          <Route path="/profile/:id" element={<UsersPublicProfile />}></Route>
          <Route path="/postpets" element={<PostPets/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
