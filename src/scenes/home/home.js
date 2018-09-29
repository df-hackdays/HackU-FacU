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
            <h1>Your child will be <br/>empowered to become a <br/>creator of technology</h1>
          </div>
        </section>
        <section className="section2">
          <YouTube className="intro-video" videoId='pOZL9KQIwKc'/>
          <div className="container">
            <h2>
              To start your child's journey with us,
              <br/>we will ask you a few simple questions:
            </h2>
          </div>
        <CallToAction label="Let's Begin" to="/questionaire"/>
        </section>
      </div>
    </div>)
    
  }
}

export default Home