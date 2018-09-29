import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

class NavBar extends Component {
  render() {
    return <header className="row">
    <div>
      <ul className="nav-list">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Learn</Link></li>
        <li><Link to='/'>Teach</Link></li>
        <li><Link to='/other'>Volunteer</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Donate</Link></li>
        <li><Link to='/'>FR</Link></li>
      </ul>
    </div>
    </header>
  }
}

export default NavBar