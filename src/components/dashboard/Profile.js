import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './profile.css'

class Profile extends Component {
  constructor(props){
    super(props)
    this.name = this.props.name
    this.link = this.props.link
  }

  render() {
    return (
      <Link to={this.props.link}> 
        <div className='profileselection'>
          {this.props.name}
        </div>
      </Link>
    )
  }
}

export default Profile