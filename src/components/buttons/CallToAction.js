import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './callToAction.css'

export default class CallToAction extends Component{
  render() {
    return (
      <div className="call-to-action-wrapper">
        <Link className="call-to-action" to={this.props.to}>
        {this.props.label}
        </Link>
      </div>
    )
  }
}