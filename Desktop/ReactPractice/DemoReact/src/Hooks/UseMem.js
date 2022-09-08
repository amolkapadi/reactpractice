import React, { useState,useMemo } from 'react';


function UseMem(){
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);

    const mulicount=useMemo(function multiCount(){
        console.log("multicount")
        return(
            count*5
        )
    },[count])

    return(
        <>
            <h1>Use Memo </h1>
            <h2>{mulicount}</h2>
            <p>Count {count}</p>
            <p>Item {item}</p>
            <button onClick={()=>setCount(count+1)}>Count Update</button>
            <button onClick={()=>setItem(item+1)}>Item Update</button>
        </>
    )
}
export default UseMem;