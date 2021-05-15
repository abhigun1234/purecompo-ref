import React, { Component } from 'react';
import NormalCompo from './NormalCompo';
import NormalFunctionalComp from './NormalFunctionalComp';
import PureComp from './PureComp';

class Parencompo extends Component {
   constructor(props){
    super(props)
    this.state={name:'abhi'}
   }
   componentDidMount(){
    setInterval(()=>{
     this.setState({name:'abhi'})
    },2000)
}
    render() {
        console.log("***********  Parent component execute")
        return (
            <div>
                Parent component
                {/* <NormalCompo name={this.state.name}></NormalCompo>
                <PureComp name={this.state.name}></PureComp> */}
                <NormalFunctionalComp name={this.state.name}></NormalFunctionalComp>

            </div>
        );
    }
}

export default Parencompo;