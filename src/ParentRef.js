import React, { Component } from 'react';

class ParentRef extends Component {
    constructor(props){
        super(props)
        this.inputref=React.createRef()
    }
    focusInput(){
      alert("child method called from parent")
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputref}/>
            </div>
        );
    }
}

export default ParentRef;