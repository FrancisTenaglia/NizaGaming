import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Promociones from './Components/homeImage';
import Informacion from './pages/information';


function App() {
  return (
    <div style={{paddingLeft:"15px", paddingRight:"15px"}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path={"/"} 
          element={
              <>
              <Promociones />
            </>
          }
        />
        <Route
          path={"/informacion"}
          element={<Informacion />} 
        />
      </Routes>

    </BrowserRouter>
    </div>
  
  );
}

export default App;
