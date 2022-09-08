import React, { useState } from 'react';

function FunState(){
    const [count,setCount]=useState(0)
    
    return(
        <>
        <h1>{count}</h1>
        <h1>This is a Function component</h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        </>
    )
}
export default FunState;