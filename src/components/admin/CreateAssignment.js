import React, { Component } from 'react';
import '../../css/createAssignment.css';

class CreateAssignment extends Component {
  render() {
    const { selectedDate } = this.props;
    const startDate = selectedDate.start;
    const endDate = startDate === selectedDate.end ? '' : selectedDate.end;
    console.log(startDate === selectedDate.end);
    
    const time = !!endDate ? '~' : '';

    return (
      <div id = "create-assignment-section">
        {startDate + ' ' + time + ' ' + endDate}
      </div>
    )
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }
}

export default CreateAssignment;