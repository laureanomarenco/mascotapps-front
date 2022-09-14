import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import React from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import Error from "./components/Error/Error.jsx";
import { fetchPets } from "./store/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
	//eslint-disable-next-line

	let dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPets());
	}, [dispatch]);
	return (
		<div className=".App">
			{/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <div>
    //     {pets.map((pet, i) => { */}
			{/* //       <div>
    //         <p key={i}>{pet.name}</p>
    //         </div>
    //     })}
    //     </div>
    //   </header> */}

			<BrowserRouter>
				<Routes>
					<Route path="/pets/:id" element={<Detail />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/account" element={<UserProfile />} />
					<Route exact path="/" element={<LandingPage />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
