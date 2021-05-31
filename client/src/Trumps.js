 
import React, {Component,useEffect} from 'react';
import axios from 'axios';
 
 
 


export default class Trumps extends Component{ 
    constructor() 
    {
        super(); 
        this.state = {
        
            posts:[]
        };
    }  
   
 
  componentDidMount =() => 
  {
      this.points();
  }
  points  = () => 
  {
    axios.get("/mp").then(response => 
      {        
       
       
         this.setState ({posts: response.data}) 
        console.log(response.data)
    })
    
  }
 
    render(){
        return(
        <div> 
        
   <h1> Hello {this.state.posts}   </h1>
        </div>
        );
    }
}

