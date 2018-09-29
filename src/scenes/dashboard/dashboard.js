import React, {Component} from 'react'
import Profile from '../../components/dashboard/Profile'

class Dashboard extends Component {
  render() {
    return <header>
      This is the Dashboard!<br/>
      Check out what your children did in their latest events!
      <Profile name="Charlie" link='./charlie'/>
      <Profile name="Mary" link='./mary'/>
    </header>
  }
}

export default Dashboard