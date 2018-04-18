import React from 'react';
import '../../css/selectedDate.css';

const SelectedDate = ({ startDate, endDate }) => {
  const time = !!endDate ? '~' : '';

  return (
    <div id="selected-date"> 
      <div>{startDate + ' ' + time}</div>
      <div>{endDate}</div>
    </div>
  )
}

export default SelectedDate;