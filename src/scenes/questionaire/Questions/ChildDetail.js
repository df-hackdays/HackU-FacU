import React, { Component, Anim } from 'react'
import './questions.css'
import CallToAction from '../../../components/buttons/CallToActionOnPress';

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
        <h1>Tell us some basic information about your child</h1>
        <input className='inputs' type="text" id="display-name" name="ip-display" placeholder="Name" required />
        <input className='inputs' type="text" id="display-name" name="ip-display" placeholder="Age" required />
        <label className='selections'> Visible Minority Status <br/>
          <select>
            <option value="Asian">Asian</option>
            <option value="Black">Black</option>
            <option value="...">...</option>

          </select>
        </label>
        <label className='selections'> Gender <br/>
          <select>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
          </select>
        </label>

        <label className='selections'> Previous CLC engagements? <br/>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        
        
        <CallToAction label="Next" onClick={this._handleClick}/>
      </div>
    )
  }
}

export default ChildDetail
