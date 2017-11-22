import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    return (
      <li className="UserItem">

        <div>
          <div className="UserItemLeftSection">
            <img src="img/avatar.png" />
          </div>
          <div className="UserItemRightSection">
            <div>
                {this.props.user.name}
            </div>
            <div>
                {this.props.user.email}
            </div>
            <div>
                {this.props.user.website}
            </div>
            <div>
                {this.props.user.phone}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default UserItem;
