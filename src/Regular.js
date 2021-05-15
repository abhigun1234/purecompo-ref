import React, { Component } from 'react';

class Regular extends Component {
    constructor(props){
        super(props)

    }
    render() {
        console.log("regular component called")
        return (
            <div>
             {this.props.name}   
            </div>
        );

    }
}

export default Regular;{}