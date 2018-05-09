import React, { Component } from 'react';
import Header from '../components/common/Header';
import Modal from '../components/modal/Modal';
import SideMenu from '../components/main/SideMenu';
import { ModalConsumer } from '../context/ModalProvider';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as adminAction from '../action/admin';
import * as studentAction from '../action/student';
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
              items = {this.props.studentItems} 
              selectedItem = {this.props.studendSelectedItems}
              selectItem = {this.props.selectSideItemForStudent}
            />
            {this.renderModal(state, actions, this.props.studentSelectedAssignment)}
          </React.Fragment>
        )
      case '/admin' : 
        return ( 
          <React.Fragment>
            <SideMenu 
              items = {this.props.adminItems} 
              selectedItem = {this.props.adminSelectedItem}
              selectItem = {this.props.selectSideItemForAdmin}
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
    studentItems: state.student.subjects,
    studendSelectedItems: state.student.selectedSubject,
    studentSelectedAssignment: state.student.selectedAssignment,

    adminItems: state.admin.items,
    adminSelectedItem: state.admin.selectedItem,
    adminSelectedAssignment: state.admin.selectedAssignment
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...adminAction, ...studentAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);