import React, { useState,useEffect } from 'react';
import axios from 'axios';
 
import { useParams} from "react-router-dom";

 
    function datas(props) {
      const { ids } = useParams();
        const [users, setUsers] = useState([]);
        const [userDetail, setUserDetail] = useState({firstName:'', lastName: ''});
        //const [userupte, updatinguser] = useState([firstName,lastName]);
        useEffect(() => {
          axios
              .get(`http://localhost:5000/auth/users/${props.match.params.id}`)
              .then(res => {
                const { data } = res
                const users = data.users.filter(user => user.id === ids )
              setUsers(users)
              })
             
              .catch(error => console.log(error))
      },[])

    
      
      const handleChange = (e) =>{
        
   
        const { target: { name, value } } = e
        setUserDetail((prevState) => ({...prevState, [name]: value }) )  }
     
        const handleOnSubmit = async (e) =>{
          e.preventDefault();
          const { firstName, lastName} = userDetail
        const book = {
              firstName, // match this name to the name in the backend
              lastName,  // match this name to the name in the backend
             };
        try {
         const { data } =await axios.put(`http://localhost:5000/auth/users/${props.match.params.id}`, book)
        
        }
        catch(err){
          console.log(err)
          }
        }

    return (
      <form onSubmit={handleOnSubmit}>
    <div className="App">
 

  
      <div className="books">
        {users &&
          users.map((book, index) => {
            //const cleanedDate = new Date(book.released).toDateString();
          

            return (
              <div className="book" key={index}>
               
               
                <div className="details">
                  <input type="text"  disabled name={book._id} value={book._id} onChange={handleChange}/>
                  <input label="First name" placeholder='First Name' name='firstName' onChange={handleChange} />
<input label="Last name" placeholder='Last Name' name='lastName' onChange={handleChange} />
                  
                </div>
              </div>
            );
          })}
      </div>
      <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
                </div>
  </div>
  </form>
    )
}

export default datas;