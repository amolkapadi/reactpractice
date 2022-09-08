import React, { useEffect, useState } from 'react';

function Demo2(){
    const [count,setCount]=useState(0);

   useEffect(()=>{
    document.title=`${count}`
   })

    return(
        <>
            <h1>Hooks {count}</h1>
            <button onClick={()=>setCount(count+1)}>incremant</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>

        </>
    )
}
export default Demo2;