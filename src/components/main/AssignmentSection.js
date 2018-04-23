import React, { Component } from 'react';
import AssignmentList from './AssignmentList';
import Calendar from './Calendar';
import '../../css/assignmentSection.css';

const AssginmentSectionLayout = ({ actions, state, selectDate, selectEvent}) => {
  return (
    <div id="assignment-section">
      <Calendar 
        selectDate = {selectDate} 
        selectEvent = {selectEvent} 
        state = {state} 
      />
      <AssignmentList 
        actions = {actions} 
        state = {state} 
      />
    </div>
  )
}

class AssignmentSection extends Component {
  componentDidMount() {
    this.setAssignmentsCardList();
  }

  selectDate = (e) => {
    this.props.actions.setDate(e);
    this.setAssignmentsCardList();
  }
  
  selectEvent = (e) => {
    const cardList = [e];
    this.props.actions.setAssignmentsCardList(cardList);
  }
  
  setAssignmentsCardList = () => {
    const { state } = this.props;
    const assignments = state.assignments[state.subjects[state.selectedSubject]]
    const selectedDate = state.selectedDate;
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

    render() {
      return (
        <AssginmentSectionLayout 
          actions = {this.props.actions}
          state = {this.props.state}
          selectDate = {this.selectDate}
          selectEvent = {this.selectEvent}
        />
      )
    }
  }
  
  
  export default AssignmentSection;