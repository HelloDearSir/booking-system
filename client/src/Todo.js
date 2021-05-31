import React, { Component } from 'react';
import axios from 'axios';
 

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
    title: '',
    body: '',
    post:[]
    };
  }

  handleInputChange = ({target}) => {
    const {name,value} = target;
    

    this.setState({
        

      [name]:value
    });
  };


componentDidMount = () =>  
{
  this.getBlogPost();
}
 getBlogPost = () =>
 {
 axios.get('/todo')
 .then((response) => { 
   const data  = response.data.tests; 
  this.setState({post: data})
  console.log("WE have data");
 })
 .catch(() => {
alert("didnt get the data")
 })
  
 
 
 };



  handleSubmit = e => {
    e.preventDefault();

    const { title,body  } = this.state;

    const payload = {
        title: this.state.title,
        body: this.state.body
    }

    axios({
        url: '/save',
        method:'POST',
        data:payload
    }) .then(() => {
        console.log("data was sent ")
        this.resetUserinput();
        this.getBlogPost();
        
    })
    .catch(() => {
        console.log("data wasnt sent ")
    })
};

resetUserinput = () =>{
  this.setState({
    title: '',
    body: ''
  })
}
    displayBlogPost = (post) => 
    {
      if (!post.length) return null;
       return post.map((posts,index) => (
      <div key={index}>
        <h3>
     {posts.title}
        </h3>
        <p>
        {posts.body}
        </p>
      </div>
      
      ));
    }
   render()
   {
       console.log(this.state)
    return (
      <div> 
         
     <h2> Working blad </h2>
     <form onSubmit={this.handleSubmit}> 
         <div className="form-input">
             <input 
             type="text"
             name = "title"
              value={this.state.title} 
             onChange={this.handleInputChange}
             />
         </div>
         <div className="form-input">
             <textarea name="body" value={this.state.body}  onChange={this.handleInputChange}> </textarea>
         </div>
         <button> submit</button>
     </form>
     <div className="blog">
       {this.displayBlogPost(this.state.post)}
     </div>
    </div>
         
    );
  }
}

export default Todo;