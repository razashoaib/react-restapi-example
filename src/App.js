import React, { Component } from 'react';
import $ from 'jquery';
import Users from './Components/Users'
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      userList: [],
      filteredUsers: [],
      q: ''
    }

    this.filterUserList = this.filterUserList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const q = event.target.value.toLowerCase();
    this.setState({ q }, () => this.filterUserList());
  }


  // For filtering the user object w.r.t name
  filterUserList() {
    let users = this.state.userList;
    let q = this.state.q;

    users = users.filter(function(user) {
      return user.name.toLowerCase().indexOf(q) != -1; // returns true or false
    });
    this.setState({ filteredUsers: users });
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
          this.setState({filteredUsers: data});
          // Logging the response
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
          <div className="Loader"></div>
        )
    }

     return (
       <div className="App">
         <h1>Get All Users </h1>
         <input type='text' className="FilterTextBox" onChange={this.onChange} placeholder='Filter by Name' />
         <Users userList={this.state.filteredUsers} />
       </div>
     );
    }
}

export default App;
