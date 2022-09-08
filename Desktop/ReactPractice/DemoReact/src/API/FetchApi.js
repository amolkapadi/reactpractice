import React,{useState} from 'react'

function FetchApi(){

    const [count,setCount]=useState(0);


    const Increment=()=>{
        setCount(count+1);
    }

    return(
        <>
            <h1>FetchApi {count} </h1>
            <button onClick={Increment}>Increment</button>
        </>
    )
}
export default FetchApi;