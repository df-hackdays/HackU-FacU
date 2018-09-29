import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateChild} from '../../../actions/questionaire'

class ChildDetail extends Component {
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
    this.props.updateChild(this.state.value)

    if (this.props.callBack) {
      setTimeout(() => {
        this.props.callBack(this.state.value)
      }, 700)
    }
  }

  _handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    let className = `container question-wrapper fade-component ${this.state.show ? 'show': ''}`
    return (
      <div className={className}>
        <h1>What is your child name?</h1>
        <input class="text-box" type="text" id="display-name" name="ip-display" placeholder="Name" value={this.state.value} onChange={this._handleChange} required />
        <CallToAction label="Next" onClick={this._handleClick}/>
      </div>
    )
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    updateChild: updateChild
  }, dispatch)
}

export default connect(null, mapActionsToProps)(ChildDetail)
