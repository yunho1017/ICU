import React, { Component } from 'react';
import Header from '../components/common/Header';
import Modal from '../components/modal/Modal';
import SideMenu from '../components/main/SideMenu';
import { ModalConsumer } from '../context/ModalProvider';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actionTypes from '../action/assignment';
import { bindActionCreators } from 'redux';

class DefaultLayout extends Component {
  render() {
    return (
      <ModalConsumer>
        { ({ state, actions }) => (
            <div>
              <Header state = {state} actions = {actions} />
              {this.renderDefaultLayout(state, actions)}
              {this.props.children}
            </div>
          )}
      </ModalConsumer>
    )
  }
  
  renderModal = (state, actions, selectedAssignment) => {
    if(state.isModal) return (
      <Modal 
        state = {state} 
        actions = {actions} 
        selectedAssignment = { selectedAssignment }/>
    )
  }

  renderDefaultLayout = (state, actions) => {
    //admin student 구분 : 추후에 리덕스로 구분 예정 (지금은 그냥 급한불끄기..)
    const location = browserHistory.getCurrentLocation().pathname;

    switch(location) {
      case '/' : 
        return (
          <React.Fragment>
            <SideMenu 
              subjects = {this.props.studentSubjects} 
              selectedSubject = {this.props.studendSelectedSubject}
              selectSubject = {this.props.selectSubjectByStudent}
            />
            {this.renderModal(state, actions, this.props.studentSelectedAssignment)}
          </React.Fragment>
        )
      case '/admin' : 
        return ( 
          <React.Fragment>
            <SideMenu 
              subjects = {this.props.adminSubjects} 
              selectedSubject = {this.props.adminSelectedSubject}
              selectSubject = {this.props.selectSubjectByAdmin}
            />
            {this.renderModal(state, actions, this.props.adminSelectedAssignment)}
          </React.Fragment>
        )
      default : return;
    }
  }
}

const mapStateToProps= (state) => {
  return {
    studentSubjects: state.student.subjects,
    studendSelectedSubject: state.student.selectedSubject,
    studentSelectedAssignment: state.student.selectedAssignment,
    adminSubjects: state.admin.items,
    adminSelectedSubject: state.admin.selectedItem,
    adminSelectedAssignment: state.admin.selectedAssignment
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);