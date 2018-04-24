import React, { Component } from 'react';
import Calendar from '../components/basic/Calendar';
import { connect } from 'react-redux';
import * as actionTypes from '../action/assignment';
import { bindActionCreators } from 'redux';

import '../css/main.css';

class AdminMain extends Component{
  render() {
    return (
      <div id="main-section">
        <Calendar 
          selectDate = {(e) => console.log(e)} 
          selectEvent = {(e) => console.log(e)} 
          events = {this.props.assignments} 
        />
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    assignments: state.admin.assignments,
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMain);