import React from 'react';
import Navigation from './config/Navigation';
import { Route, Routes } from "react-router-dom";
import About from "../components/About";

 function App() {
  return (
    <div className='App'>
       <Navigation/>

       <Routes>
         
            <Route path="/about"   element={<About/>} /> 
            
        </Routes>
    </div>
  )
}
export default App
