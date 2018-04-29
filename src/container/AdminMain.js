import React, { Component } from 'react';
import * as actionTypes from '../action/assignment';
import Calendar from '../components/basic/Calendar';
import CreateAssignment from '../components/admin/CreateAssignment';
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

  async componentDidMount() {
    await this.props.setDateByAdmin();
  }

  renderChild = (modalActions) => {
    const selectEventHandler = (e) => {
      modalActions.modalClick(2);
      this.props.selectAssignmentsByAdmin(e);
    }

    const selectDateHandler = (e) => {
      this.props.selectDateByAdmin(e);
    }

    switch(this.props.selected) {
      case 0 : 
        return (
          <React.Fragment>
            <Calendar 
              selectDateHandler = {selectDateHandler} 
              selectEventHandler  = {selectEventHandler} 
              events = {this.props.assignments} 
              selectedDate = {this.props.selectedDate}
            />
            <CreateAssignment
              selectedDate = {this.props.selectedDate}
            />
          </React.Fragment>
        )
      case 1 : 
        return (
          <AssignmentContents 
            assignments = {this.props.assignments} 
            assignmentsCardList = {this.props.assignments}
            selectAssignmentsCard = {this.props.selectAssignmentsByAdmin}
            modalActions = {modalActions}
            modalId = {4}
          />
        )
      default : return;
    }
  }
}

const mapStateToProps= (state) => {
  return {
    assignments: state.admin.assignments,
    selected: state.admin.selectedSubject,
    selectedDate: state.admin.selectedDate
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMain);