import { useState, useEffect } from 'react';
import logo from './logo.svg';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Movies() {
    const [movies, setMovies] = useState([
        {
            title: '',
            genre: '',
            year: ''
        }
    ])


    const [movie, setMovie] = useState(
        {
            title: '',
            genre: '',
            year: ''
        }
    )

    useEffect(() => {
        fetch('/movies').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setMovies(jsonRes))
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setMovie(prevInput => {
            return (
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
    }

    function addMovie(e) {
        e.preventDefault();
        alert("movie added");
        const newMovie = {
            title: movie.title,
            genre: movie.genre,
            year: movie.year
        }

        axios.post('/newmovie', newMovie);
    }

    function deleteMovie(id) {
        axios.delete('/delete/' + id);
        alert("movie deleted");
    }

    return (

        <div className="App">

            <h1>Add Movie</h1>
            <Form>
                <Container>      
                 <Row>
                    <Col>
                        <Form.Control size="sm" onChange={handleChange} name="title" value={movie.title} placeholder="Title"/>
                    </Col>
                    <Col>
                        <Form.Control onChange={handleChange} name="genre" value={movie.genre} placeholder= "Gener" />
                    </Col>
                    <Col> <Form.Control onChange={handleChange} name="year" value={movie.year} placeholder ="year" /> </Col>
                    <Col>
                        <Button onClick={addMovie}>ADD MOVIE</Button>
                    </Col>
                </Row>
                </Container>
            </Form>

            {movies.map(movie => {
                return (
                    <div>
                        <h1>{movie.title}</h1>
                        <p>{movie.genre}</p>
                        <p>{movie.year}</p>
                        <button onClick={() => deleteMovie(movie._id)}>DELETE</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Movies;
