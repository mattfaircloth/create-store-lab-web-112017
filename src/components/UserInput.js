import React, { Component } from 'react';

class UserInput extends Component {

  state = {
      username: '',
      hometown: ''
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
    type: 'ADD_USER',
    user: this.state,
  });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username'  onChange={(event) => this.handleNameChange(event)}></input>
          <input type='text' name='hometown'  onChange={(event) => this.handleHometownChange(event)}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
