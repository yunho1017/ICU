import React, { Component } from 'react';
import AssignmentList from './AssignmentList';
import Calendar from '../basic/Calendar';
import { connect } from 'react-redux';
import * as actionTypes from '../../action/assignment';
import { bindActionCreators } from 'redux';
import '../../css/assignmentSection.css';

const AssginmentSectionLayout = ({ assignmentsCardList, assignments, selectedDate, selectDate, selectEvent}) => {
  return (
    <div id="assignment-section">
      <Calendar 
        selectDate = {selectDate} 
        selectEvent = {selectEvent} 
        events = {assignments} 
      />
      <AssignmentList
        assignments = {assignments}
        selectedDate = {selectedDate}
        assignmentsCardList = {assignmentsCardList}
      />
    </div>
  )
}

class AssignmentSection extends Component {
  componentDidMount() {
    this.setAssignmentsCardList();
  }

  selectDate = (e) => {
    this.props.selectDate(e);
    this.setAssignmentsCardList();
  }
  
  selectEvent = (e) => {
    this.props.modalActions.modalClick('assignment');
    this.props.selectAssignmentsCard(e);
  }
  
  setAssignmentsCardList = () => {
    const assignments = this.props.assignments;
    const selectedDate = this.props.selectedDate;
    let assignmentList = [];
    
    assignments.map((assignment, index) => { 
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);
      
      if(!!selectedDate ? 
        (startDate >= selectedDate.start && startDate <= selectedDate.end) 
        || (endDate >= selectedDate.start && endDate <= selectedDate.end)
        || (startDate <= selectedDate.start && endDate >= selectedDate.end ) : true) assignmentList.push(assignment);
        
        return this.props.setAssignmentsCardList(assignmentList);
      });
    }

    render() {
      return (
        <AssginmentSectionLayout
          selectDate = {this.selectDate}
          selectEvent = {this.selectEvent}
          assignments = {this.props.assignments}
          assignmentsCardList = {this.props.assignmentsCardList}
        />
      )
    }
  }
  
const mapStateToProps= (state) => {
  return {
    selectedDate: state.student.selectedDate,
    assignments: state.student.assignments[state.student.subjects[state.student.selectedSubject]],
    assignmentsCardList: state.student.assignmentsCardList
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AssignmentSection);