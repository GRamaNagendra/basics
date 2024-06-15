import React from 'react';

class User extends React.Component {
  render() {
    return <h2>Class Component, {this.props.firstName} {this.props.lastName}</h2>;
            



  }
}

export default User;