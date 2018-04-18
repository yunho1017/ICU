import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  render() {
    const { state } = this.props;
    return (
      <div id="assignment-list-section">
        <AssignmentContents
          assignments={state.assignments[state.subjects[state.selectedSubject]]} 
          selectedDate={null} 
          selectedAssignment={null}
        />
      </div>
    )
  }
}

export default AssignmentList;