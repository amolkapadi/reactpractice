import React from "react";

class Hs extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <>
               {this.state.show? <h1>Hide and show</h1>:null}
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle me</button>
            </>
        )
    }
}
export default Hs;