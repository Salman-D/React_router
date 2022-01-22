// import React from 'react';
// // import { Routes ,Route, Link } from 'react-router-dom';


// export default function About() {
//   return(
//       <>
//          <h1>About</h1>
//       </>
//   )
// }
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <h1>About</h1>
        <Link to="/User"> 
            <button >Go To user</button>
        </Link> 
        </>
    )
}

export default About;