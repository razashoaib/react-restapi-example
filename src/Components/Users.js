import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    let allUsers;

    if(this.props.userList) {
      allUsers = this.props.userList.map ( u => {
        return (
          // Adding a key to remove the warning
          <UserItem key={u.id} user={u} />
        );
      });
    }
    return (
      <div>
        {allUsers}
      </div>
    );
  };
}

export default Users;
