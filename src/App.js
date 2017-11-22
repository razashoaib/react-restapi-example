import React, { Component } from 'react';
import $ from 'jquery';
import Users from './Components/Users'

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  // AJAX request to get all the users
  getAllUsers() {
    $.ajax({
      type: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({users: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getAllUsers();
  }

  componentWillMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        Something in master
        <Users whatever="someValue" />
      </div>
    );
  }
}

export default App;
