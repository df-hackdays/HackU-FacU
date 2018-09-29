import React, {Component} from 'react'
import CallToAction from '../../../components/buttons/CallToAction'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addChild} from '../../../actions/questionaire'

class AddChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
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
    this.props.addChild()

    if (this.props.callBack) {
      setTimeout(() => {
        this.props.callBack()
      }, 700)
    }
  }

  _handleComplete = () => {
    if (this.props.onComplete) {
      setTimeout(() => {
        this.props.onComplete()
      }, 700)
    }
  }

  render () {
    let children = this.props.children ? this.props.children.map(
      (value, id) => {
        return <div className='child' key={id}>{`#${value.name}`}</div>
      }
    ) : null
    let className = `container question-wrapper fade-component ${this.state.show ? 'show': ''}`

    return (
      <div className={className}>
        <h1>Add a child</h1>
        {children}
        <button className="pill-button" onClick={this._handleClick}>
          +
        </button>
        {this.props.children.length ? <CallToAction label="Done" to="/thankyou"/>: null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    children: state.questionaireReducer.children
  }
}

const mapActionsToProps = dispatch => {
  return bindActionCreators({
    addChild: addChild
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(AddChild)