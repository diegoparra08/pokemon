import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import './App.css'

import { Home } from './views/Home.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { AllPokemons } from './views/AllPokemons.jsx';
import { DetailCard } from './components/Cards/DetailCard.jsx';


function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && < NavBar />}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/all' element={<AllPokemons />} />
        <Route path='/detail/:id' element={<DetailCard />} /> 

      </Routes>

    </>
  )
}

export default App
