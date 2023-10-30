import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Promociones from './Components/homeImage';
import Informacion from './pages/information';
import Footer from './Components/Footer';
import Principal from './Components/Principal';


function App() {
  return (
    <div style={{paddingLeft:"15px", paddingRight:"15px"}}>
    <BrowserRouter>
      <Navbar />
      <Principal />
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
      <Footer />
    </BrowserRouter>
    </div>
  
  );
}

export default App;
