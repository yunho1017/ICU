import React, { Component } from 'react';
import AssignmentCalendar from './AssignmentCalendar';
import AssignmentList from './AssignmentList';
import '../../css/assignmentSection.css';

class AssignmentSection extends Component {
  render() {
    return (
      <div id="assignment-section">
        <AssignmentCalendar />
        <AssignmentList />
      </div>
    )
  }
}

export default AssignmentSection;