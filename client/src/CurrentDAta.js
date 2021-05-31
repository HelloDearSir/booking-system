import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Route,
  useParams,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";

function CurrentDAta(props) {
  const { ids } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/auth/users")
      .then((res) => {
        
        setUsers(res.data.Testing);
      })
      .catch((error) => console.log(error));
  }, []);

             
              const renderHeader = () => {
                let headerElement = ['id', 'firstName', 'lastName','Location','Tutor','Time']
        
                return headerElement.map((key, index) => {
                    return <th key={index}>{key.toUpperCase()}</th>
                })
            }
            const renderBody = () => {
              return users && users.map(({ _id, firstName, lastName,Location,Tutor,Time }) => {
                  return (
                    
                      <tr key={_id}>
                       <td> <Link to ={`/datas/${_id}`} name="Edit" className="btn">
                            Edit </Link> </td>
                
                          <td>{firstName}</td>
                          <td>{lastName}</td>
                          <td>{Location}</td>
                          <td>{Tutor}</td>
                          <td>{Time}</td>
                      </tr>
                  )
              })
          }
          return (
            <div>
                <h1 id='title'>React Table</h1>
                <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </div>
        )
   
    
    
}

export default CurrentDAta;