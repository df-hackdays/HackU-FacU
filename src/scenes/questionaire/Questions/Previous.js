import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateChild} from '../../../actions/questionaire'

class Previous extends Component {
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
    this.props.updateChild("previousExp", value)

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
        <h1>Has <strong className="code-name">{this.props.name}</strong> participated 
        <br/>in any previous workshops with us?</h1>
        <div class="round-button-wrapper">
          <button className="round-button" onClick={()=> this._handleClick(true)}>
            YES
          </button>

          <button className="round-button" onClick={()=> this._handleClick(false)}>
            NO
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

export default connect(mapStateTopProps, mapActionsToProps)(Previous)
