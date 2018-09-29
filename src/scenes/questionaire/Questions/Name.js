import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';

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

  render () {
    let className = `container question-wrapper fade-component ${this.state.show ? 'show': ''}`
    return (
      <div className={className}>
        <h1>What is your name?</h1>
        <input type="text" id="display-name" name="ip-display" placeholder="Name" required />
        <CallToAction label="Next" onClick={this._handleClick}/>
      </div>
    )
  }
}

export default Name