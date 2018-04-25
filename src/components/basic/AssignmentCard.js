import React from 'react';
import '../../css/assignmentCard.css';

const AssignmentCard = ({ start, end, assignment, styles, handleEvent }) => {
  let startDate = start;
  let endDate = end;
  if (startDate === endDate) endDate = '';
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