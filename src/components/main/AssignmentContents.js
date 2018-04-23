import React, { Component } from 'react';
import AssignmentCard from './AssignmentCard';
import '../../css/assignmentContents.css';

class AssignmentContents extends Component {
  render() {
    return (
      <div id="assignment-contents-wrapper">
        {this.renderAssignmentCard(this.props.actions)}
      </div>
    )
  }

  renderAssignmentCard = (actions) => { 
    const { state } = this.props;
    return state.assignmentsCardList.map((assignment, index) => { 
      const styles = { backgroundColor : assignment.color };
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);

      return <AssignmentCard 
                key = {index}
                title = {assignment.title}
                auther = {assignment.auther}
                colorCode = {assignment.colorCode}
                detail = {assignment.detail}
                handleEvent = {actions.modalClick} 
                styles = {styles}
                start = {this.getDateFormat(startDate)}
                end = {this.getDateFormat(endDate)}
              />
    })
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }
}

export default AssignmentContents;