import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PetsContainer from './components/PetsContainer/PetsContainer';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import Error from './components/Error/Error';

import React from 'react';
import UserProfile from './components/UserProfile/UserProfile';

// import { fetchPets } from './store/actions';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import Donate from './components/Donate/Donate';

function App() {
  //eslint-disable-next-line
  
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPets());
  // }, [dispatch]);
  return (
  <div className='.App'>
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
      <Route path="/pets/:id" element={<Detail/>}/>
      <Route path="/estado/:status" element={<PetsContainer />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<SignUp />}/>
      <Route path="/account" element={<UserProfile/>}/>
      <Route path="/donate" element={<Donate />}/>
      <Route exact path='/' element={<LandingPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;