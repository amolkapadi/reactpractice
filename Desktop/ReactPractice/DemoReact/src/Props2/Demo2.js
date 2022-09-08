import React, { Component } from 'react';


class Demo2 extends Component{
    render(){
        return(
            <>
                <h1>This is a class component Props</h1>
                <h2>{this.props.name} {this.props.text}</h2>
            </>
        )
    }
}
export default Demo2;