import React, {Component} from 'react'
import NavBar from '../../components/navigation/NavBar';
import CallToAction from '../../components/buttons/CallToAction';
import './home.css'

class Home extends Component {
  render() {
    return (<div>
      <NavBar/>
      <div className="container home-wrapper">
        <h1>Your chlid will be epowered to become a creator of technology</h1>
        <h2>
          To start this process, you will need to begin
        </h2>
        <CallToAction label="register" to="/questionaire"/>
      </div>
    </div>)
    
  }
}

export default Home