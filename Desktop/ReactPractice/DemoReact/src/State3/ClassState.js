import React, { Component } from 'react';

class ClassState extends Component{
    constructor(){
        super();
        this.state={
            name:"React",
            email:"react@gmail.com"
        }
    }
    
    test() {
        this.setState({
            name:"html",
            email:"html@gmail.com" 
        })
    }
    render(){
        console.log("render");
        return(
            <>
                <h1>This is a class component {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                <button onClick={()=>{this.test()}} className="btn btn-primary">Update</button>
            </>
        )
    }
}

export default ClassState;