import React, { Component } from 'react';
import Calendar from './Calendar';
import SelectedAssignment from './SelectedAssignment';
import '../../css/assignmentCalendar.css';

class AssignmentCalendar extends Component {
  render() {
    return (
      <div id="calendar-section">
        <Calendar />
        <SelectedAssignment />
      </div>
    )
  }
}

export default AssignmentCalendar;