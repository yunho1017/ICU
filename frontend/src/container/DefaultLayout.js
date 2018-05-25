import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/common/Header';
import Modal from '../components/modal/Modal';
import SideMenu from '../components/main/SideMenu';
import { ModalConsumer } from '../context/ModalProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as adminAction from '../action/admin';
import * as studentAction from '../action/student';
import * as authAction from '../action/auth';
import * as requestAction from '../action/request';

class DefaultLayout extends Component {
  render() {
    return (
      <ModalConsumer>
        { ({ state, actions }) => (
            <div>
              <Header state = {state} actions = {actions} clickLogout = {this.clickLogout}/>
              {this.renderDefaultLayout(state, actions)}
              {this.props.children}
            </div>
          )}
      </ModalConsumer>
    )
  }

  async componentDidMount() {
    if(localStorage.getItem('isAdmin') === 'true') {
      await this.props.setSubject(localStorage.getItem('token'), true);
      await this.props.selectSideItemForAdmin(this.props.adminItems[0].id);
    }else {
      await this.props.setSubject(localStorage.getItem('token'), false);
      await this.props.selectSideItemForStudent(this.props.studentItems[0].id);
    }
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
    if(localStorage.getItem('isAdmin') === 'true') {
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
    } else {
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
    }
  }

  clickLogout = _ => {
    authAction.logout();
    this.props.history.push('/signin');
  }
}

const mapStateToProps= (state) => {
  return {
    studentItems: state.student.subjects,
    studendSelectedItems: state.student.selectedSubject,
    studentSelectedAssignment: state.student.selectedAssignment,

    adminItems: state.admin.items,
    adminSelectedItem: state.admin.selectedItem,
    adminSelectedAssignment: state.admin.selectedAssignment,
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...adminAction, ...studentAction, ...requestAction}, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DefaultLayout));