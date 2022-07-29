import React, {useRef} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Login/Home';
import Catalog from './pages/Catalog/Catalog';
import Movie from './pages/Movie/Movie';

function App() {
  const refTest = useRef<HTMLDivElement>(null)

  console.log(refTest.current && refTest.current.scrollWidth)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="filme/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
