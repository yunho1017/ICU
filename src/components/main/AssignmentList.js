import React, { Component } from 'react';
import AssignmentContents from '../basic/AssignmentContents';
import { ModalConsumer } from '../../context/ModalProvider';
// import SelectedSubject from './SelectedSubject';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  render() {
    return (
      <ModalConsumer>
        {
          ({ actions }) => (
            <div id="assignment-list-section">
              {/* <SelectedSubject subject = {state.subjects[state.selectedSubject]} /> */}
              <AssignmentContents
                assignments = {this.props.assignments} 
                selectedDate = {this.props.selectedDate} 
                modalActions = {actions}
                selectAssignmentsCard = {this.props.selectAssignmentsCard}
                assignmentsCardList = {this.props.assignmentsCardList}
                modalId = {1}
              />
            </div>
          )
        }
      </ModalConsumer>
    )
  }
}

export default AssignmentList;