import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Detail from './components/Detail/Detail';
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import { fetchPets } from './store/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  //eslint-disable-next-line
  
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
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
      <Route exact path='/' element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/pets/:id" element={<Detail/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;