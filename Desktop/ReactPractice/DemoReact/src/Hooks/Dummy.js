import React, { useState } from 'react';
 function Dummy(){

    const [count,setCount]=useState(0);

    const Increment=()=>{
        setCount(count+1);
    }

    return(
        <>
            <h1>Hooks in React {count}</h1>
            <button onClick={Increment}>Increment</button>
            

        </>

    )
 }
 export default Dummy;