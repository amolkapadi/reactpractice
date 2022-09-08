import React,{useState} from 'react';

function UseStat(){
    const [user,setUser]=useState("Use State Hook");

    return(
        <>
            <h1>This is a use State hook</h1>
            <h1>This is a {user}</h1>
            

        </>
    )

}
export default UseStat;