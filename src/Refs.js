import React, { Component } from 'react';

class Refs extends Component {
   constructor(props){
       super(props)
       //first step for creating Ref
       this.inputRef=React.createRef()
      this.getData=this.getData.bind(this)
   }
   componentDidMount(){
    console.log("this.inputRef",this.inputRef)
   this.inputRef.current.focus()
//     console.log("this.inputRef",this.inputRef)
   }
   getData(){
    alert(this.inputRef.current.value)
   }
    render() {
        return (
            <div>
                {/*  */}
                {/*  */}
                
               <input type="text" placeholder="enter your name"  ref={this.inputRef}/>            
               <button onClick={this.getData} >get</button>
            </div>
        );
    }
}


export default Refs;           