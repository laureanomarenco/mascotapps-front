import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetsContainer from "./components/PetsContainer/PetsContainer";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import Error from "./components/Error/Error";
import LoginAdmin from "./components/AdminPage/LoginAdmin";
import NuevoAdmin from "./components/AdminPage/NuevoAdmin";
// import Pets from "./components/AdminPage/Pets";
import Faq from "./components/Faq/Faq";
import React from "react";

import { fetchPets } from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Donate from "./components/Donate/Donate";
import FavContainer from "./components/FavContainer";
import UsersPublicProfile from "./components/UsersPublicProfile/UsersPublicProfile";
import PostPets from "./components/PostPets/PostPets";
import NuevoProfile from "./components/UserProfile/NuevoProfile";
import ConsultasForm from "./components/ConsultasForm/ConsultasForm";
import SuccessPetsContainer from "./components/SuccessPetsContainer/SuccessPetsContainer";
import Team from "./components/Team/Team";
import PointsStore from "./components/PetStore/PointsStore";
import UserBanned from "./components/UserBanned/UserBanned";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className=".App overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route path="/register" element={<SignUp />} />

          <Route
            path="/account"
            element={<NuevoProfile />}
          />
          <Route
            path="/pets/:id"
            element={<Detail />}
          />
          <Route
            path="/estado/:status"
            element={<PetsContainer />}
          />
          <Route
            path="/admin"
            element={<LoginAdmin />}
          />
          <Route
            path="/admin/general"
            element={<NuevoAdmin />}
          />
          <Route
            path="/donate"
            element={<Donate />}
          />

          <Route path="*" element={<Error />} />
          <Route
            path="/favoritos"
            element={<FavContainer />}
          ></Route>
          <Route
            path="/profile"
            element={
              <UsersPublicProfile />
            }
          ></Route>
          <Route
            path="/postpets"
            element={<PostPets />}
          ></Route>
          <Route path="/faqs" element={<Faq />}></Route>
          <Route path="/query" element={<ConsultasForm />} />
          <Route
            path="/team"
            element={<Team />}
          />
          <Route
            path="/store"
            element={<PointsStore />}
          />
          <Route
            path="/success"
            element={
              <SuccessPetsContainer />
            }
          />
          <Route path="/banned" element={<UserBanned />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
