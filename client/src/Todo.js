
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
        
            store.addNotification({
                title:"new todo",
                message:"added a new todo",
                type:"info",
                container:"top-right",
                insert:"top"
             
            });
        
       
        const newTodo = {
            text: Todo.text,

        }

        axios.post('/newtodo', newTodo);
    }

  

    return (
        <div>
        <ReactNotification/>
        <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control required  size="sm" onChange={handleChange} name="text" value={Todo.text} />
                        </Col>
                        <Col>
                            <Button onClick={addTodo}>ADD MOVIE</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>

            {Todos.map(todo => {
                return (
                    <div>
                    <p>{todo.text}</p>
                  
                    </div>
                )
            })}
        </div>
    );

}

export default Todo;