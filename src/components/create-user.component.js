import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'enter username'
    })
  }
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username
    };
    // console.log(user);
    axios.post('http://localhost:5000/users/add', user)
    .then(res => {
          alert("New user, "+ res.data +" created...");
  })
    .catch( err=> {
      alert("Failed to create this user...");
    });
    this.setState({
      username: 'enter username'
    });
      // window.location='/';
  }

  render() {
    return (
      <div>
        <h3>Create New User </h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text"
                required
                className = "form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}/>
            </div>

            <div className="form-group">
                <button type="submit" value=""
                className="btn btn-primary">
                Create User</button>
            </div>
          </form>
      </div>
    );
  }
}
