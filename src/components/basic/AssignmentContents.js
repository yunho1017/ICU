import React, { Component } from 'react';
import * as actionTypes from '../../action/assignment';
import AssignmentCard from './AssignmentCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../css/assignmentContents.css';

class AssignmentContents extends Component {
  render() {
    return (
      <div id="assignment-contents-wrapper">
        {this.renderAssignmentCard()}
      </div>
    )
  }

  renderAssignmentCard = () => { 
    return this.props.assignmentsCardList.map((assignment, index) => { 
      const styles = { backgroundColor : assignment.color };
      let startDate = new Date(assignment.start);
      let endDate = new Date(assignment.end);
      endDate.setDate(endDate.getDate() - 1);

      return <AssignmentCard 
                key = {assignment.key}
                assignment = {assignment}
                handleEvent = {this.selectCard} 
                styles = {styles}
                start = {this.getDateFormat(startDate)}
                end = {this.getDateFormat(endDate)}
              />
    })
  }

  selectCard = (id, assignment) => {
    this.props.modalActions.modalClick(id);
    this.props.selectAssignmentsCard(assignment);
  }

  getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }
}

const mapStateToProps= (state) => {
  return { } 
}

const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentContents);