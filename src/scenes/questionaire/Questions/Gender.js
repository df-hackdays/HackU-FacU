import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateChild} from '../../../actions/questionaire'

class GenderDetail extends Component {
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

  _handleClick = (value) => {
    this.setState({
      show:false
    })
    this.props.updateChild("gender", value)

    if (this.props.callBack) {
      setTimeout(() => {
        this.props.callBack()
      }, 700)
    }
  }

  render () {
    let className = `container question-wrapper fade-component ${this.state.show ? 'show': ''}`
    return (
      <div className={className}>
        <h1>How does <strong className="code-name">{this.props.name}</strong> identify?</h1>
        <div class="round-button-wrapper">
          <button className="round-button" onClick={()=> this._handleClick("female")}>
            FEMALE
          </button>
          <button className="round-button" onClick={()=> this._handleClick("male")}>
            MALE
          </button>
          <button className="round-button" onClick={()=> this._handleClick("other")}>
            OTHER
          </button>
          <button className="round-button" onClick={()=> this._handleClick("other")}>
            SKIP
          </button>
        </div>
      </div>
    )
  }
}

const mapStateTopProps = (state) => {
  let children = state.questionaireReducer.children
  console.log(children)
  return {
    name: children[children.length -1].name
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    updateChild: updateChild
  }, dispatch)
}

export default connect(mapStateTopProps, mapActionsToProps)(GenderDetail)
