import axios from 'axios';
import React, { Component } from 'react';

class CoureseDetails extends Component {
    constructor(){

        super()
        this.state={courseDetails:[]}
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){

        axios.get('https://dronaonlineadmin.herokuapp.com/courses/').then(res=>{

        console.log("res",res)
        }).catch(error=>{
            console.log("errors",error)
        })

    }
}

export default CoureseDetails;