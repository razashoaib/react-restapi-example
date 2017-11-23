import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class UserItem extends Component {
  render() {
    return (
      <li className="UserItem">
        <div>
          <div className="UserItemLeftSection">
            <img src="img/avatar.png" />
          </div>
          <div className="UserItemRightSection">
            <div className="UserName">
                <FontAwesome name='address-card' /> <span className="innerText">{this.props.user.name}</span>
            </div>
            <div className="UserCompany">
                <FontAwesome name='briefcase' /> <span className="innerText">{this.props.user.company.name}</span>
            </div>
            <div className="UserEmail">
                <FontAwesome name='envelope-o' /> <span className="innerText">{this.props.user.email}</span>
            </div>
            <div className="UserPhone">
                <FontAwesome name='address-book' /> <span className="innerText">{this.props.user.phone}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default UserItem;
