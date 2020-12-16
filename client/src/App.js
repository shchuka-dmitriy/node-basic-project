import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import browserHistory from './browserHistory';
import './App.css';
import './reset.css';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/registration' component={RegistrationPage}/>
            <Route exact path='/login' component={LoginPage}/>
          </Switch>
        </Router>
    );
  }
}

export default App;