import React from 'react';
import Todoitem from "ToDoItem";


const Todos = ({users}) => 
{
    return(
        <div className="App">
         
            {users.map((book) => <Todoitem key={book.id} book={book.firstName}/>)}
           
                 </div>
            )
    }
    


export default Todos


