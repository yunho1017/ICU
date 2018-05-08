import React, { Component } from 'react';
import * as actionTypes from '../action/assignment';
import AssignmentList from '../components/main/AssignmentList';
import Calendar from '../components/common/Calendar';
import { ModalConsumer } from '../context/ModalProvider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../css/main.css';

class MainLayout extends Component {
  selectEventHandler = (e) => {
    this.props.modalActions.modalClick(1);
    this.props.selectAssignmentsByStudent(e);
  }
  render() {
    const { selectAssignmentsCard, 
            assignmentsCardList, 
            assignments, 
            selectedDate, 
            selectDateHandler } = this.props;
    
    return (
      <div id="main-section">
        <Calendar 
          selectDateHandler = {selectDateHandler} 
          selectEventHandler = {this.selectEventHandler} 
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
}

class Main extends Component {
  async componentDidMount() {
    await this.props.setDateByStudent();
    this.setAssignmentsCardList();
  }

  selectDateHandler = (e) => {
    this.props.selectDateByStudent(e);
    this.setAssignmentsCardList();
  }
  
  setAssignmentsCardList = () => {
    const assignments = this.props.assignments;
    let selectedDate = {
      start: new Date(this.props.selectedDate.start).getTime(),
      end: new Date(this.props.selectedDate.end).getTime()
    }
    let assignmentList = [];

    assignmentList = assignments.filter((assignment, index) => { 
      const startDate = new Date(assignment.assginmentDate.start).getTime();
      const endDate = new Date(assignment.assginmentDate.end).getTime();
      if((startDate >= selectedDate.start && startDate <= selectedDate.end) 
        || (endDate >= selectedDate.start && endDate <= selectedDate.end)
        || (startDate <= selectedDate.start && endDate >= selectedDate.end )) return true;

      return false;
    });
    return this.props.setAssignmentsCardListByStudent(assignmentList);
  }

  render() {
    return (
      <ModalConsumer>
          { (modal) => (
            <MainLayout
              selectAssignmentsByStudent = {this.props.selectAssignmentsByStudent}
              selectAssignmentsCard = {this.props.selectAssignmentsByStudent}
              assignmentsCardList = {this.props.assignmentsCardList}
              selectDateHandler = {this.selectDateHandler}
              selectedDate = {this.props.selectedDate}
              assignments = {this.props.assignments}
              modalActions = {modal.actions}
            />
          )}
      </ModalConsumer> 
    )
  }
}
  
const mapStateToProps= (state) => {
  return {
    assignments: state.student.assignments[state.student.subjects[state.student.selectedSubject]],
    assignmentsCardList: state.student.assignmentsCardList,
    selectedDate: state.student.selectedDate
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);