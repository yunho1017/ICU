import React from 'react';
import '../../css/assignmentCard.css';

const AssignmentCard = ({ start, end, title, detail, styles, handleEvent }) => {
  let startDate = start;
  let endDate = end;
  if (startDate === endDate) endDate = '';
  
  const time = !!endDate ? '~' : '';

  return (
    <div className="assginment-card-wrapper" style = {styles} onClick = {handleEvent}>
      <div className="card-header">
        <div className="selected-date"> {startDate + ' ' + time + ' ' + endDate}</div>
        <div className="card-title">{title}</div>
      </div>
      <div className="assginment-detail">{detail}</div>
    </div>
  )
}

export default AssignmentCard;