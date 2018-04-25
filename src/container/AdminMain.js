import React, { Component } from 'react';
import * as actionTypes from '../action/assignment';
import Calendar from '../components/basic/Calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalConsumer } from '../context/ModalProvider';
import AssignmentContents from '../components/basic/AssignmentContents';
import '../css/main.css';

class AdminMain extends Component{
  render() {
    return (
      <ModalConsumer>
        {
          ({ actions }) => (
            <div id="main-section">
              {this.renderChild(actions)}
            </div>
          )
        }
      </ModalConsumer>
    )
  }

  renderChild = (modalActions) => {
    const selectEventHandler = (e) => {
      modalActions.modalClick(3);
      this.props.selectAssignmentsByAdmin(e);
    }

    switch(this.props.selected) {
      case 0 : 
        return (
          <Calendar 
            selectDateHandler = {(e) => console.log(e)} 
            selectEventHandler  = {selectEventHandler} 
            events = {this.props.assignments} 
          />
        )
      case 1 : 
        return (
          <AssignmentContents 
            assignments = {this.props.assignments} 
            assignmentsCardList = {this.props.assignments}
            selectAssignmentsCard = {this.props.selectAssignmentsByAdmin}
            modalActions = {modalActions}
            modalId = {2}
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