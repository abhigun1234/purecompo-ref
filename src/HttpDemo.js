import React, { Component } from 'react';
import axios  from 'axios';
class HttpDemo extends Component {
    constructor(){
        super()
        this.state={posts:[]}
    }
    componentDidMount(){

        axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{

        console.log("res",res)
        this.setState({posts:res.data})
        })
    }
    render() {
        return (
            <div>
                List of posts{

                    this.state.posts.length?this.posts.map(post=><div>{post.title}</div>):null
                }
            </div>
        );
    }
}

export default HttpDemo;
