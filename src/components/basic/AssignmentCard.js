import React from 'react';
import '../../css/assignmentCard.css';

const AssignmentCard = ({ start, end, assignment, styles, handleEvent }) => {
  const startDate = start;
  const endDate = startDate === end ? '' : end;
  const time = !!endDate ? '~' : '';
  
  return (
    <div className="assginment-card-wrapper" style = {styles} onClick = {() => handleEvent(assignment)}>
      <div className="card-header">
        <div className="selected-date"> {startDate + ' ' + time + ' ' + endDate}</div>
        <div className="card-title">{assignment.title}</div>
      </div>
      <div className="assginment-detail">{assignment.detail}</div>
    </div>
  )
}

export default AssignmentCard;