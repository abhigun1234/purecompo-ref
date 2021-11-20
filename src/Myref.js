import React, { Component } from 'react';

class Myref extends Component {
    constructor(){

        super()
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        console.log("this.inputRef",this.inputRef)
        //this.inputRef.current.focus()
    }
    fetchMyData=()=>{
       
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
              <input type="text" ref={this.inputRef}></input>  
              <button onClick={()=>this.fetchMyData()}>Fetch</button>
              
            </div>
        );
    }
}

export default Myref;