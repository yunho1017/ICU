import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from '../../components/common/Calendar';
import CreateAssignment from '../../components/admin/CreateAssignment';
import { ModalConsumer } from '../../context/ModalProvider';
import AssignmentContents from '../../components/common/AssignmentContents';
import '../../css/main.css';

import * as action from '../../action/admin';
import * as requestAction from '../../action/request';

class AdminMain extends Component {
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
    await this.props.setDateForAdmin();
    //await this.props.setSubject(localStorage.getItem('token'), true);
  }

  renderChild = (modalActions) => {
    const selectEventHandler = (e) => {
      modalActions.modalClick(2);
      this.props.selectAssignmentsForAdmin(e);
    }

    const selectDateHandler = (e) => {
      this.props.selectDateForAdmin(e);
    }

    switch(this.props.selected) {
      case '0' : 
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
      case '1' : 
        return (
          <AssignmentContents 
            assignments = {this.props.assignments} 
            assignmentsCardList = {this.props.assignments}
            selectAssignmentsCard = {this.props.selectAssignmentsForAdmin}
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
    selected: state.admin.selectedItem,
    selectedDate: state.admin.selectedDate
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...action, ...requestAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMain);