import React, { Component, useState } from 'react';
import axios from 'axios';

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      location: '', 
      tutor: '' , 
      time:''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firstName, lastName, email, location, tutor, time } = this.state;

    const book = {
      firstName,
      lastName,
      email,
      location, 
      tutor, 
      time
    };

    axios
      .post('/auth/createMovies', book)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
      [e.target.name] =  '';
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="location"
                onChange={this.handleInputChange}
              />
            </div>
            <br/> 
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="tutor"
                placeholder="Tutor"
                onChange={this.handleInputChange}
              />
            </div>
            <br/> 
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="date"
                className="form-control"
                name="time"
                placeholder="location"
                onChange={this.handleInputChange}
              />
            </div>
            <br/> 
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default booking;
