import React, { Component, PureComponent } from 'react';
import Memo from './Memo';
import Pure from './Pure';
import Regular from './Regular';

class Parent extends Component {
    constructor(props){
        super(props)
    this.state={ name:'ravi'}

    
    }
    componentDidMount(){
            setInterval(()=>{
             this.setState({name:'raj'})
            },2000)
    }
    render() {
     console.log("parent component called")
        return (
            <div>
                Parent Component
                <Regular name={this.state.name}></Regular>
                {/* <Pure name={this.state.name}></Pure> */}
                <Memo name={this.state.name}></Memo>
            </div>
        );
    }
}

export default Parent;