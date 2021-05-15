import React, { Component } from 'react';
import ParentRef from './ParentRef';

class FocusDemo extends Component {
    constructor(){
   super()
   this.compRef=React.createRef()
    this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){

        this.compRef.current.focusInput()
    }
    render() {
        return (
            <div>
              <ParentRef ref={this.compRef}></ParentRef>  
              <button onClick={this.clickHandler}>click</button>
            </div>
        );
    }
}

export default FocusDemo;