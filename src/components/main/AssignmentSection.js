import React, { Component } from 'react';
import AssignmentCalendar from './AssignmentCalendar';
import AssignmentList from './AssignmentList';
import '../../css/assignmentSection.css';

class AssignmentSection extends Component {
  render() {
    return (
      <div id="assignment-section">
        <AssignmentCalendar actions={this.props.actions} state={this.props.state} />
        <AssignmentList state={this.props.state} />
      </div>
    )
  }
}

export default AssignmentSection;