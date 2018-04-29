import React, { Component } from 'react';
import AssignmentCard from './AssignmentCard';
import '../../css/assignmentContents.css';
import { getDateFormat } from '../../common';

class AssignmentContents extends Component {
  constructor(props) {
    super(props);

    this.getDateFormat = getDateFormat.bind(this);
  }

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

      return <AssignmentCard 
                key = {assignment.key}
                assignment = {assignment}
                handleEvent = {this.selectCardHandler} 
                styles = {styles}
                start = {this.getDateFormat(startDate)}
                end = {this.getDateFormat(endDate)}
              />
    })
  }

  selectCardHandler = (assignment) => {
    this.props.modalActions.modalClick(this.props.modalId);
    this.props.selectAssignmentsCard(assignment);
  }
}

export default AssignmentContents;