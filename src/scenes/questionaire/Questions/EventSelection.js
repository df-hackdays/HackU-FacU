import React, {Component} from 'react'
import CallToAction from '../../../components/buttons/CallToActionOnPress'

class EventSelection extends Component {
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
        <h1>Which event is Charlie attending?</h1>
        <a href='https://www.canadalearningcode.ca/our-chapters/'>Select from our Chapters</a>
      </div>
    )
  }
}

export default EventSelection