import React from 'react';
import {removeUser} from '../actions/users';
class User extends React.Component{

  delete(id) {
    this.props.dispatch(removeUser(id));
  }

  render() {
    const {user} = this.props;
    return (
      <li className="user">
        <span className="removeUser" onClick={this.delete.bind(this,user.id)}>x</span>
        <h2>{user.name}</h2>
        {user.age} años
      </li>
    )
  }
}

export default User;
