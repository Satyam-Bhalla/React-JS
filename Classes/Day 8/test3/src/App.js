import React from 'react';
import LoginForm from './components/LoginForm';
import {Route,Switch, Redirect} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Redirect from="/" to="/login" exact />
    </Switch>
    </React.Fragment>
  );
}

export default App;
