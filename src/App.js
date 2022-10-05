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
  var banned= localStorage.getItem("banned");
  const dispatch = useDispatch();
  console.log(banned);


  useEffect(() => {
    console.log("estoy en el useEffect");
    dispatch(fetchPets());
     banned = localStorage.getItem("banned");
  }, [dispatch, banned]);

  return (
    <div className=".App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={banned === "true" ? <UserBanned /> : <LandingPage />}
          />
          <Route
            path="/home"
            element={banned === "true" ? <UserBanned /> : <Home />}
          />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/account"
            element={banned === "true" ? <UserBanned /> : <NuevoProfile />}
          />
          <Route
            path="/pets/:id"
            element={banned === "true" ? <UserBanned /> : <Detail />}
          />
          <Route
            path="/estado/:status"
            element={banned === "true" ? <UserBanned /> : <PetsContainer />}
          />
          <Route
            path="/admin"
            element={banned === "true" ? <UserBanned /> : <LoginAdmin />}
          />
          <Route
            path="/admin/general"
            element={banned === "true" ? <UserBanned /> : <NuevoAdmin />}
          />
          <Route
            path="/donate"
            element={banned === "true" ? <UserBanned /> : <Donate />}
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/favoritos"
            element={banned === "true" ? <UserBanned /> : <FavContainer />}
          ></Route>
          <Route
            path="/profile"
            element={
              banned === "true" ? <UserBanned /> : <UsersPublicProfile />
            }
          ></Route>
          <Route
            path="/postpets"
            element={banned === "true" ? <UserBanned /> : <PostPets />}
          ></Route>
          <Route
            path="/faqs"
            element={ <Faq />}
          ></Route>
          <Route
            path="/query"
            element={ <ConsultasForm />}
          />
          <Route
            path="/team"
            element={banned === "true" ? <UserBanned /> : <Team />}
          />
          <Route
            path="/store"
            element={banned === "true" ? <UserBanned /> : <PointsStore />}
          />
          <Route
            path="/success"
            element={
              banned === "true" ? <UserBanned /> : <SuccessPetsContainer />
            }
          />
          <Route
            path="/banned"
            element={
              <UserBanned/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
