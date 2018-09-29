import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './scenes/home/home'
import Other from './scenes/otherpage/otherpage'
import NavBar from './components/navigation/NavBar'
import Dashboard from './scenes/dashboard/dashboard'
import Child from './scenes/dashboard/child'
import './App.css';
import Questionaire from './scenes/questionaire/Questionaire';
import Thankyou from './scenes/questionaire/Thankyou';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/questionaire" component={Questionaire}/>
          <Route path="/other" component={Other}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/child" component={Child}/>
          <Route path='/thankyou' component={Thankyou} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
