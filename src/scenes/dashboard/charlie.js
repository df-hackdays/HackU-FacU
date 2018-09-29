import React, {Component} from 'react'
import './charlie.css'

class Charlie extends Component {
  render() {
    return (
      <div className='container'>
        <header className='intro'>
          Here's what Charlie did in 3 hours with CLC!
        </header>

        <div className='eventDetail'>
        In 3 hours....
        </div>

        <div className='eventRating'>
          Happy? Not Happy?
        </div>
        
        <div className='eventImpact'>
          What they have accomplished means...
        </div>
      </div>
    )
  }
}

export default Charlie