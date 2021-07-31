import React, { Component } from 'react';

class Refrence extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
        this.clickHandler=this.clickHandler.bind(this)
    }
    componentDidMount(){
         this.inputRef.current.focus()
        console.log(' this.inputRef', this.inputRef)
    }
    clickHandler(){
       console.log("this.inputRef",this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input ref ={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default Refrence;