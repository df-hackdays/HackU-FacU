import React, { Component } from 'react'
import Name from './Questions/Name'
import './questionaire.css'
import AddChild from './Questions/AddChild';
import ChildDetail from './Questions/ChildDetail';
import Location from './Questions/Location';
import EventSelection from './Questions/EventSelection';


class Questionaire extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stateNum: 0
    }
  }

  _handleCallBack = () => {
    let item = (this.state.stateNum + 1) % 5
    this.setState({
      stateNum: item
    }) 
  }

  render() {
    const stateFlow = [
      <Name callBack={this._handleCallBack}/>,
      <Location callBack={this._handleCallBack}/>,
      <AddChild callBack={this._handleCallBack}/>,
      <ChildDetail callBack={this._handleCallBack}/>,
      <EventSelection callBack={this._handleCallBack}/>,
    ]
    return <div className="questionaire-wrapper">
      <div className="logo">
        <img class="siteNav-logo" src="https://www.canadalearningcode.ca/wp-content/uploads/clc-logo-1.svg" alt="clc logo"/>
      </div>
      {stateFlow[this.state.stateNum]}
    </div>
  }
}

export default Questionaire