import React, {Component} from 'react'
import CallToAction from '../../../components/buttons/CallToActionOnPress'

class AddChild extends Component {
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
        <h1>AddChild</h1>
        <CallToAction label="Next" onClick={this._handleClick}/>
      </div>
    )
  }
}

export default AddChild