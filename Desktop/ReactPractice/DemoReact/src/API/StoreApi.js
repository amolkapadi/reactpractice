import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoreApi=()=>{

    const [product,setProduct]=useState([]);

    useEffect(()=>{
            getProduct();
    },[]);

    const getProduct= async()=>{
         const res= await axios.get('https://fakestoreapi.com/products')
         setProduct(res.data);
    }
    
    return(
        <>
       <h1>all product</h1>
       {
        product.map((result)=>(
            <h1 key={result.id}>{result.title}</h1>
        ))
       }
        </>
    )
}
export default StoreApi;