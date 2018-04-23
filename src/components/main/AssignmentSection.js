import React, { Component } from 'react';
import AssignmentList from './AssignmentList';
import Calendar from './Calendar';
import '../../css/assignmentSection.css';

class AssignmentSection extends Component {
  render() {
    return (
      <div id="assignment-section">
        <Calendar 
          selectDate = {this.selectDate} 
          selectEvent = {this.selectEvent} 
          state = {this.props.state.data} 
        />
        <AssignmentList 
          actions = {this.props.actions} 
          state = {this.props.state.data} 
        />
      </div>
    )
  }

  componentDidMount() {
    this.setAssignmentsCardList();
  }

  selectDate = (e) => {
    const date = {
      start: e.start,
      end: e.end
    };
    this.props.actions.selectDate(date);
    this.setAssignmentsCardList();
  }

  selectEvent = (e) => {
    const cardList = [e];
    this.props.actions.setAssignmentsCardList(cardList);
  }

  setAssignmentsCardList = () => {
    const { state } = this.props;
    const assignments = state.data.assignments[state.data.subjects[state.data.selectedSubject]]
    const selectedDate = state.data.selectedDate;
    let assignmentList = [];

    assignments.map((assignment, index) => { 
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);
      
      if(!!selectedDate ? 
        (startDate >= selectedDate.start && startDate <= selectedDate.end) 
          || (endDate >= selectedDate.start && endDate <= selectedDate.end)
          || (startDate <= selectedDate.start && endDate >= selectedDate.end ) : true) assignmentList.push(assignment);

      return this.props.actions.setAssignmentsCardList(assignmentList);
    });
  }
}

export default AssignmentSection;