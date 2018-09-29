import React, {Component} from 'react'
import NavBar from '../../components/navigation/NavBar';
import {connect} from 'react-redux'
import './child.css'

class Child extends Component {
  render() {
    return (
      <div className='container child-wrapper'>
        <NavBar />
        <header className='username'>
          {this.props.username}
        </header>

        <h3>Welcome back!</h3>

        <h5 className='eventInfo'>On Thursday, October 3rd, <div className='name'>{this.props.username}</div>
          worked with...<br/>
        </h5>

        <h4 className='eventName'>"Game Making With Scratch"</h4>

        <div className='learnObjectives'>
          <h3 className='objectiveHeader'> Learning Objectives:</h3>
        <ul className="check-marks">
        <li>
            <img className='checkmarks' src='/images/Checkmark.png' alt='Checkmark icon'/>
            <p>Introduction to Scratch's online community</p>
          </li>
          <li>
            <img className='checkmarks' src='/images/Checkmark.png' alt='Checkmark icon'/>
            <p>Heightening imagination in a new way</p>
          </li>

          <li>
            <img className='checkmarks' src='/images/Checkmark.png' alt='Checkmark icon'/>
            <p>Bringing information to life in a digital form</p>
          </li>

          <li>
            <img className='checkmarks' src='/images/Checkmark.png' alt='Checkmark icon'/>
            <p>Build and upload a game for the web to download</p>
          </li>
        </ul>
        </div>

        <div className='eventRating'>
          <p className='ratingQuestion'>How do you and your child feel <br/> about working with Canada Learning Code?</p>
          <p className='ratingOptions'>Please select one:</p>
          <img className='ratingSelection' src='/images/Emojis_dashboard.png' alt='Please rate your experience on working with Canada Learning Code'/>
        </div>
        
        <div className='eventGoal'>
          Canada Learning Code helps young people learn to <br />
          think creatively, reason systematically,<br/>
          and work collaboratively.
        </div>
        <button className='scratch-link' >
          <a href='https://www.canadalearningcode.ca/our-chapters/' target='_blank'>Learn More about CLC Workshops </a>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    username: state.questionaireReducer.selected
  }
}

export default connect(mapStateToProps)(Child)