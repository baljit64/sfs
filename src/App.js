
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import './App.css'
function App() {




  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
