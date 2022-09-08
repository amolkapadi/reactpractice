import React from 'react'
import Data from '../Data.json';

export default function Info() {

  return (
    <div>
        <h1>my Data</h1>

        {Data.map((result)=>
           
            <>
                <h1>{result.title}</h1>
                <p>{result.description}</p>
            </>
        )}
    </div>
  )
}
