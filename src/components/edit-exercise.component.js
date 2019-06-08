import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: ['no users']
    }
  }
  componentDidMount() {

    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
    .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })
      })
    .catch((error)=> console.log(error));

    axios.get('http://localhost:5000/users/')
    .then(res=> {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(usr => usr.username)
        })
      }
    })
    .catch(alert)
  }
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/update'+this.props.match.params.id, exercise)
    .then(res => {
      alert("New exercise created...");
      console.log(res.data);
    })
    .catch(err => alert("Failed to create exercise..."));
  //  window.location = '/';
    this.setState({
      description: '',
      duration: 0
    });

  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log </h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <select ref="userInput"
                required
                className = "form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {this.state.users.map((user)=>{
                   return<option key={user} value={user}> {user} </option>
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description: </label>
              <input type="text" required className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                placeholder="Description of the exercise"/>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (in minutes): </label>
              <input type="text" required className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                placeholder="Duration (in minutes)"/>
            </div>

            <div className= "form-group">
                <label>Date: </label>
                <div>
                  <DatePicker selected={this.state.date}
                    onChange={this.onChangeDate}/>
                </div>
            </div>

            <div className="form-group">
                <button type="submit" value=""
                className="btn btn-primary">
                Edit Exercise log</button>
            </div>
          </form>
      </div>
    );
  }
}
