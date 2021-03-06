import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return(
    <Router>
      <div className="container">
        <Navbar/> <br/>
        <Route path='/' exact component={ExercisesList}/>
        <Route path='/edit-exercise/:id' component={EditExercise}/>
        <Route path='/create-exercise' component={CreateExercise}/>
        <Route path='/create-user' component={CreateUser}/>

      </div>
    </Router>
  );
}

export default App;
