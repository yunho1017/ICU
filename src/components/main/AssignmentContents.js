import React, { Component } from 'react';
import AssignmentCard from './AssignmentCard';
import { ModalConsumer } from '../../context/ModalProvider';
import '../../css/assignmentContents.css';

class AssignmentContents extends Component {
  renderAssignmentCard = (actions) => { 
    const { assignments, selectedDate } = this.props;
    return assignments.map((assignment, index) => { 
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);
      
      if(!(!!selectedDate ? 
        (startDate >= selectedDate.start && startDate <= selectedDate.end) 
          || (endDate >= selectedDate.start && endDate <= selectedDate.end)
          || (startDate <= selectedDate.start && endDate >= selectedDate.end ) : true)) return '';
          
      const styles = { backgroundColor : assignment.color };

      return <AssignmentCard 
                key = {index}
                title = {assignment.title}
                auther = {assignment.auther}
                colorCode = {assignment.colorCode}
                detail = {assignment.detail}
                handleEvent = {actions.click} 
                styles = {styles}
                start = {this.getDateFormat(startDate)}
                end = {this.getDateFormat(endDate)}
              />
    })
  }

  render() {
    return (
      <ModalConsumer>
        {
          ({ actions }) => (
            <div id="assignment-contents-wrapper">
              {this.renderAssignmentCard(actions)}
            </div>
          )
        }
      </ModalConsumer>
    )
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }
}

export default AssignmentContents;