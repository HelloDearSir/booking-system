 
import React, {Component} from 'react';
 import axios from 'axios';
 

 
 

export default class Weather extends Component{ 
    constructor() 
    {
        super(); 
        this.state = {
            weather: "0"
        };
    }  
   
componentDidMount()
{
    axios.get("/weath").then(response => this.setState({weather: response.data.temp}))
}
 
    render(){
        return(
        <div> 
        <button onClick={this.handleButtonClick}> Weather</button>
   <h1> Weather is {this.state.weather}  </h1>
        </div>
        );
 }
}

