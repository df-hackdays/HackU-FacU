import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addName} from '../../../actions/questionaire'

class Name extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      value: ''
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        show: true
      })
    }, 300)
  }

  _handleClick = () => {
    this.setState({
      show:false
    })
    if (this.props.callBack) {
      setTimeout(() => {
        this.props.callBack(this.state.value)
      }, 700)
    }
  }

  _onValueChange = (e) => {
    this.setState(
      {
        value: e.target.value
      }
    )
  }

  render () {
    let className = `container question-wrapper fade-component ${this.state.show ? 'show': ''}`
    return (
      <div className={className}>
        <h1>What is your name?</h1>
        <input className="text-box" type="text" id="display-name" name="ip-display" placeholder="Name" value={this.state.value} onChange={this._onValueChange} required />
        <CallToAction label="Next" onClick={this._handleClick}/>
      </div>
    )
  }
}

const mapActionsToProps = dispatch => {
  return bindActionCreators({
    addName
  },dispatch)
}

export default connect(null, mapActionsToProps)(Name)