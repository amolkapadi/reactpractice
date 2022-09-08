import React,{useReducer} from 'react';

const initialState={count:0}
const reducer=(state,action)=>{
    console.log(state,action)
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
            default:
                return state
    }
}
function UseRedu(){

    const [state,dispatch]  = useReducer(reducer,initialState)
    return(
        <>
        <h1>Use Readucer  {state.count}</h1>
        <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
        <button  onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
        </>
    )
}
export default UseRedu;