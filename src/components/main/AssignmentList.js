import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import SelectedSubject from './SelectedSubject';
import '../../css/assignmentList.css';

class AssignmentList extends Component {
  render() {
    const { state } = this.props;
    return (
      <div id="assignment-list-section">
        <SelectedSubject subject = {state.subjects[state.selectedSubject]} />
        <AssignmentContents
          assignments = {state.assignments[state.subjects[state.selectedSubject]]} 
          selectedDate = {null} 
          selectedAssignment = {null}
          styles = {{borderRadius: '0 0 10px 10px', height: 'calc( 100% - 90px )'}}
        />
      </div>
    )
  }
}

export default AssignmentList;