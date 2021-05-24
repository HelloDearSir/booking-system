
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'animate.css/animate.compat.css'
import 'react-notifications-component/dist/theme.css';
function Todo() {
    const [Todos, SetTodos] = useState([
        { Todo: '' }
    ]);

    const [Todo, setTodo] = useState(
        { todo: '' }
    )
    const [validated, setValidated] = useState(false);
    useEffect(() => {
        axios.get("/Todos")
            .then(response => SetTodos(response.data))
            .catch(error => console.log(error));
    })

    function handleChange(e) {
     
            const { name, value } = e.target;
            setTodo(prevInput => {
                return ({
                    ...prevInput,
                    [name]: value
                })
            })
        }

    function addTodo(e) {
        e.preventDefault();
        
           
       
        const newTodo = {
            text: Todo.text,

        }

        axios.post('/newtodo', newTodo);
    }
  
    function DeleteToDo(id){
        axios.delete('/deleting/' + id);
        store.addNotification({
            title:"new todo",
            message:"Congrats on completing the task",
            type:"info",
            container:"top-right",
            insert:"top"
        });
    
    }
  

    return (
        <div>
        <ReactNotification/>
        <h1> Todo List</h1>
        <Form>
                <Container>
                    <Row>
                        <Col md="6">
                            <Form.Control required className="text-center" size="sm" onChange={handleChange} name="text" value={Todo.text} />
                        </Col>
                        <Col md ="4">
                            <Button className="postionButtons" onClick={addTodo}>ADD MOVIE</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>

            {Todos.map(todo => {
                return (
                    <div>
                        
                        <Container>
                        <Row>
                        <Col md ="8"> 
                        <p>{todo.text}</p>
                          </Col>  
                         <Col md ="3">  
                    <Button className="postionButton" onClick={() => DeleteToDo(todo._id)}>DELETE</Button> </Col>  
                  
                        </Row>
                        </Container>
                    
                    </div>
                )
            })}
        </div>
    );

}

export default Todo;