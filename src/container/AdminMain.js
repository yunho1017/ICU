import React, { Component } from 'react';
import Calendar from '../components/basic/Calendar';
import { connect } from 'react-redux';
import * as actionTypes from '../action/assignment';
import { bindActionCreators } from 'redux';
import '../css/main.css';
import AssignmentContents from '../components/basic/AssignmentContents';

class AdminMain extends Component{
  render() {
    return (
      <div id="main-section">
        {this.renderChild()}
      </div>
    )
  }

  renderChild = () => {
    switch(this.props.selected) {
      case 0 :
        return (
          <Calendar 
            selectDate = {(e) => console.log(e)} 
            selectEvent = {(e) => console.log(e)} 
            events = {this.props.assignments} 
          />
        )
      case 1 : 
        return (
          <AssignmentContents 
            assignments = {this.props.assignments} 
            selectedDate = {this.props.selectedDate}
            assignmentsCardList = {this.props.assignments}
            selectAssignmentsCard = {this.props.selectAssignmentsCard}
          />
        )
      default : return;
    }
  }
}

const mapStateToProps= (state) => {
  return {
    assignments: state.admin.assignments,
    selected: state.admin.selectedSubject
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMain);