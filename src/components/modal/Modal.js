import React, { Component } from 'react';
import * as actionTypes from '../../action/assignment';
import AssignmentDetail from '../modal/AssignmentDetail';
import Mypage from '../modal/MyPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../css/modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div id="modal-overlay" onClick={() => this.props.actions.modalClick('')}></div>
        <div id="modal">
        { this.renderModal() }
        </div>
      </div>
    )
  }

  renderModal = () => {
    switch(this.props.state.id) {
      case 'mypage' :
        return <Mypage />
      case 'assignment' :
        return <AssignmentDetail assignment = {this.props.selectedCard} />
      default : return;
    }
  }
}

const mapStateToProps= (state) => {
  return {
    selectedDate: state.student.selectedDate,
    assignments: state.student.assignments[state.student.subjects[state.student.selectedSubject]],
    assignmentsCardList: state.student.assignmentsCardList,
    selectedCard: state.student.selectedCard
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);