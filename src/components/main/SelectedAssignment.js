import React, { Component } from 'react';
import AssignmentContents from './AssignmentContents';
import SelectedDate from './SelectedDate';
import '../../css/selectedAssignment.css';

class SelectedAssignment extends Component {
  render() {
    const { state } = this.props;
    console.log(state.selectedDate);
    
    let startDate = !!state.selectedDate.start ? this.getDateFormat(state.selectedDate.start) : '';
    let endDate = !!state.selectedDate.end ? this.getDateFormat(state.selectedDate.end) : '';
    if (startDate === endDate) endDate = null;
    return (
      <div id="selected-assignment-section">
        <SelectedDate startDate={startDate} endDate={endDate}/>
        <AssignmentContents 
          assignments={state.assignments[state.selectedSubject]} 
          selectedDate={state.selectedDate} 
          selectedAssignment={state.selectedAssignment}
          styles={{borderTopLeftRadius: 0, borderTopRightRadius: 0, width: 'calc( 100% - 210px )'}}
        />
      </div>
    )
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '월 ' + (date.getDate()) + '일';
  }
}

export default SelectedAssignment;