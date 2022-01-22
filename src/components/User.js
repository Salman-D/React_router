import React from 'react';

export default function User() {
    let a = [
        {
            name :"salman",
            course : "web development"
        },
        {
            name :"Asad",
            course : "web designer"
        },{
            name :"hashir",
            course : "C C O"
        },
        {
            name :"Ali",
            course : "C C N O"
        }
    ]
  return(
      <>
      <h1>user data</h1>
      {
         a.map((v,i)=>{
            return(
                <div key={i}>
                    <h1>{v.name}</h1>
                    <b>{v.course}</b>
                    <hr/>
                </div>
            )
          })
      }
      </>
  )
}
