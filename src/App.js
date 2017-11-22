import React, { Component } from 'react';
import $ from 'jquery';
import Users from './Components/Users'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      userList: []
    }
  }

  // AJAX request to get all the users
  getAllUsers() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userList: data}, function() {
          this.setState({loading: false});
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getAllUsers();
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {

    if(this.state.loading) {
        return (
          <div className="loader"></div>
        )
    }

     return (
       <div className="App">
         <hr />
         <h1>Get All Users </h1>
         <Users userList={this.state.userList} />
       </div>
     );
    }
}

export default App;
