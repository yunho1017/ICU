import React, { Component } from 'react';
import * as actionTypes from '../../action/assignment';
import AssignmentList from './AssignmentList';
import Calendar from '../basic/Calendar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../css/assignmentSection.css';

const AssginmentSectionLayout = ({ selectAssignmentsCard, assignmentsCardList, assignments, selectedDate, selectDateHandler, selectEventHandler}) => {
  return (
    <div id="assignment-section">
      <Calendar 
        selectDateHandler = {selectDateHandler} 
        selectEventHandler = {selectEventHandler} 
        events = {assignments} 
        selectedDate = {selectedDate}
      />
      <AssignmentList
        assignments = {assignments}
        selectAssignmentsCard = {selectAssignmentsCard}
        assignmentsCardList = {assignmentsCardList}
      />
    </div>
  )
}

class AssignmentSection extends Component {
  componentDidMount() {
    this.setAssignmentsCardList();
  }

  selectDateHandler = (e) => {
    this.props.selectDateByStudent(e);
    this.setAssignmentsCardList();
  }
  
  selectEventHandler = (e) => {
    this.props.modalActions.modalClick(1);
    this.props.selectAssignmentsByStudent(e);
  }
  
  setAssignmentsCardList = () => {
    const assignments = this.props.assignments;
    let selectedDate = this.props.selectedDate;
    selectedDate.start.setHours(0,0,0,0);
    selectedDate.end.setHours(0,0,0,0);
    let assignmentList = [];
    
    assignments.map((assignment, index) => { 
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      
      if((startDate >= selectedDate.start && startDate <= selectedDate.end) 
        || (endDate >= selectedDate.start && endDate <= selectedDate.end)
        || (startDate <= selectedDate.start && endDate >= selectedDate.end )) assignmentList.push(assignment);

      return this.props.setAssignmentsCardListByStudent(assignmentList);
    });
  }

  render() {
    // console.log(this.props.state);
    // console.log(this.props.assignmentsCardList);
    
    return (
      <AssginmentSectionLayout
        selectDateHandler = {this.selectDateHandler}
        selectEventHandler = {this.selectEventHandler}
        assignments = {this.props.assignments}
        assignmentsCardList = {this.props.assignmentsCardList}
        selectAssignmentsCard = {this.props.selectAssignmentsByStudent}
        selectedDate = {this.props.selectedDate}
      />
    )
  }
}
  
const mapStateToProps= (state) => {
  return {
    assignments: state.student.assignments[state.student.subjects[state.student.selectedSubject]],
    assignmentsCardList: state.student.assignmentsCardList,
    selectedDate: state.student.selectedDate,
    state: state.student
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentSection);