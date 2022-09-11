import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import React from 'react';
import { fetchPets } from './store/actions';
import { useEffect } from 'react';

function App() {
  let pets = useSelector((state) => state.pets);
  console.log(pets)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
  <Container maxWidth='xl'>
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
    </Routes>
  </BrowserRouter>
  </Container>
  )
}

export default App;