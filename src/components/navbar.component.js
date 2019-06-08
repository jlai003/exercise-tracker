import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import "/bootstrap/dist/css/bootstrap.min.css";


export default class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className='navbar-brand'>Exercise Tracker</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link">Exercises</Link>
              </li>
              <li className="nav-item">
                <Link to='/create-exercise' className="nav-link">Create Excercise Log</Link>
              </li>
              <li className="nav-item">
                <Link to='/create-user' className="nav-link">Create User</Link>
              </li>
            </ul>
        </div>

      </nav>
    );
  }
}
