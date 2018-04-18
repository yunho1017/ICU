import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import '../../css/selectedAssignment.css';

class SelectedAssignment extends Component {
  render() {
    const { state } = this.props;

    return (
      <div id="selected-assignment-section">
        <AssignmentContents 
          assignments={state.assignments[state.selectedSubject]} 
          selectedDate={state.selectedDate} 
          selectedAssignment={state.selectedAssignment} 
        />
      </div>
    )
  }
}

export default SelectedAssignment;