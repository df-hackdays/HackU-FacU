import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import NavBar from './components/navigation/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/other" component={Other}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
