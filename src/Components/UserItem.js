import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className="UserItem">
        Inside the custom component {this.props.whatever}
      </div>
    );
  }
}

export default UserItem;
