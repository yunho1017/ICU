import React from 'react';
import '../../css/assignmentCard.css';

const AssignmentCard = ({ start: startDate, end: endDate, assignment, styles, handleEvent }) => {
  const isOneDay = startDate === endDate;
  
  return (
    <div className="assginment-card-wrapper" style = {styles} onClick = {() => handleEvent(assignment)}>
      <div className="card-header">
        <div className="selected-date"> {isOneDay ? `${startDate}` : `${startDate} ~ ${endDate}`}</div>
        <div className="card-title">{assignment.title}</div>
      </div>
      <div className="assginment-detail">{assignment.detail}</div>
    </div>
  )
}

export default AssignmentCard;