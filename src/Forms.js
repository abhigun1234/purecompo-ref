import React, { Component } from 'react';
class Forms extends Component {
    constructor(props){
        super(props)
        this.state={userId:'',
                title:'',
                body:''
            }
    }
    changeHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
         e.preventDefault()
         console.log(this.state)
        
       }
  
    render() {
        const{userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder="Enter id" type='' name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input  placeholder="Enter title"  type='' name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='' placeholder="Enter body"  name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default Forms;