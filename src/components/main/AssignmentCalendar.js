import React, { Component } from 'react';
import Calendar from './Calendar';
import '../../css/assignmentCalendar.css';

class AssignmentCalendar extends Component {
  render() {
    return (
      <div id="calendar-section">
        <Calendar actions={this.props.actions} state={this.props.state} />
      </div>
    )
  }
}

export default AssignmentCalendar;