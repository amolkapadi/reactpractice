import React,{Component} from 'react';

class EventClass extends Component{

    Demo(){
        alert("class component");
    }

    render(){
        return(
            <>
                <h1>Class component Event</h1>
                <button onClick={()=>this.Demo()}>CLick me</button>
            </>
        )
    }
}
export default EventClass;