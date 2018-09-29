import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './scenes/home/home'
import './App.css';
import Questionaire from './scenes/questionaire/Questionaire';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/questionaire" component={Questionaire}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
