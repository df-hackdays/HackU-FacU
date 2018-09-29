import React, {Component} from 'react';
import YouTube from 'react-youtube';
import NavBar from '../../components/navigation/NavBar';
import CallToAction from '../../components/buttons/CallToAction';
import './home.css'

class Home extends Component {
  render() {
    return (<div>
      <NavBar/>
      <div className="home-wrapper">
        <section className="section1">
          <div className="container">
            <h1>Your child will be empowered to become a creator of technology</h1>
          </div>
        </section>
        <section className="section2">
          <YouTube videoId='pOZL9KQIwKc'/>
          <div className="container">
            <h2>
              To start this process, you will need to begin
            </h2>
          </div>
        <CallToAction label="register" to="/questionaire"/>
        </section>
      </div>
    </div>)
    
  }
}

export default Home