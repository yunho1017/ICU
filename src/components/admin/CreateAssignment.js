import React from 'react';
import '../../css/createAssignment.css';

const CreateAssignment = ({ selectedDate: { start: startDate }, selectedDate: { end: endDate } }) => {
  const isOneDay = startDate.getTime() === endDate.getTime();

  return (
    <div id = "create-assignment-section">
      {isOneDay ? `${startDate}` : `${startDate} ~ ${endDate}`}
    </div>
  )
}

export default CreateAssignment;