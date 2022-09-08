import React, { useState, useEffect } from 'react'

export default function Fetch2() {
  const [Users, fetchUsers] = useState([])

//   const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res)
//         fetchUsers(res)
//       })
//   }

    const getData = async ()=>{
        const result= await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await result.json();
        console.log(response);
        fetchUsers(response);
    }
    
     useEffect(() => {
        getData();
    },[]);

  return (
    <>
      <h2>React Fetch API Example</h2>
      <ul>
        {Users.map((item) =>(
          <li key={item.id}>{item.name}</li>

        
          ))}
      </ul>
    </>
  )
}