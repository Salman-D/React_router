// import React from 'react';
// import Home from '../components/Home';
// import About from '../components/About';

// import { Routes ,Route } from 'react-router-dom';


// export default function Navigation() {
//   return(
//       <>
//       Parent
//         <Routes>
//             <Route path="/" element={<Home/>} > </Route>
//             <Route path="/About" element={<About/>} > </Route>
//         </Routes>
//       </>
//   )
// }
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import User from "../components/User";


function Navigation(){
    return(
        <>
        <h1>router Class</h1>
        <Routes>
            <Route path="/about"   element={<About/>} /> 
            <Route path="/Home"   element={<Home/>} />
            <Route path="/User"   element={<User/>} />


        </Routes>
        </>
    )
}

export default Navigation