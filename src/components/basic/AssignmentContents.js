import React, { Component } from 'react';
import AssignmentCard from './AssignmentCard';
import '../../css/assignmentContents.css';

class AssignmentContents extends Component {
  render() {
    return (
      <div id="assignment-contents-wrapper">
        {this.renderAssignmentCard()}
      </div>
    )
  }

  renderAssignmentCard = () => { 
    return this.props.assignmentsCardList.map((assignment, index) => { 
      const styles = { backgroundColor : assignment.color };
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);

      return <AssignmentCard 
                key = {assignment.key}
                assignment = {assignment}
                handleEvent = {this.selectCard} 
                styles = {styles}
                start = {this.getDateFormat(startDate)}
                end = {this.getDateFormat(endDate)}
              />
    })
  }

  selectCard = (assignment) => {
    this.props.modalActions.modalClick(this.props.modalId);
    this.props.selectAssignmentsCard(assignment);
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }
}

export default AssignmentContents;