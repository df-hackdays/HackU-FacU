import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './callToAction.css'

export default class CallToAction extends Component{
  render() {
    return (
      <div className="call-to-action-wrapper">
        <button className="call-to-action" onClick={this.props.onClick}>
        {this.props.label}
        </button>
      </div>
    )
  }
}