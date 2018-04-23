import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
// import SelectedSubject from './SelectedSubject';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  render() {
    const { state } = this.props;

    return (
      <div id="assignment-list-section">
        {/* <SelectedSubject subject = {state.subjects[state.selectedSubject]} /> */}
        <AssignmentContents
          assignments = {state.assignments[state.subjects[state.selectedSubject]]} 
          selectedDate = {state.selectedDate} 
          actions = {this.props.actions}
          state = {this.props.state}
        />
      </div>
    )
  }
}

export default AssignmentList;