import React, {Component} from 'react';
import YouTube from 'react-youtube';
import NavBar from '../../components/navigation/NavBar';
import CallToAction from '../../components/buttons/CallToAction';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators } from 'redux'
import {selectChild} from '../../actions/questionaire'
import './dashboard.css'

class Dashboard extends Component {
  _selectChild = (child) => {
    this.props.selectChild(child)
    this.props.history.push("child")
  }

  render() {
    let children = this.props.children ? this.props.children.map(
      (value, id) => {
        return <button className='child' key={id} onClick={() => {this._selectChild(value.name)}}>{`#${value.name}`}</button>
      }
    ) : null

    return (<div>
      <NavBar/>
      <div className="dashboard-wrapper">
        <section className="section1">
          <div className="container">
            <h1>Please select the student: </h1>
            <div className="children-wrapper">
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    children: state.questionaireReducer.children
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    selectChild: selectChild
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Dashboard))