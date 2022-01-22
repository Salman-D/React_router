import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>

        <h1>Home</h1>

        <Link to="/about"> 
            <button >Go To About</button>
        </Link> 

        </>

    )
}

export default Home;

// import { Routes ,Route, Link } from 'react-router-dom';


// export default function Home() {
//   return(
//       <>
//         <h1>Home</h1>
//       <Link to="/About"> <button >Go To About
//         </button>
//         </Link> 
//       </>
//   )
// }