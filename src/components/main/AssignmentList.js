import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import { ModalConsumer } from '../../context/ModalProvider';
// import SelectedSubject from './SelectedSubject';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  render() {
    const { state } = this.props;
    return (
      <ModalConsumer>
        {
          ({ actions }) => (
            <div id="assignment-list-section">
              {/* <SelectedSubject subject = {state.subjects[state.selectedSubject]} /> */}
              <AssignmentContents
                assignments = {state.assignments[state.subjects[state.selectedSubject]]} 
                selectedDate = {state.selectedDate} 
                modalActions = {actions}
                actions = {this.props.actions}
                state = {this.props.state}
              />
      </div>

          )
        }
      </ModalConsumer>
    )
  }
}

export default AssignmentList;