import React, { Component } from 'react';
import AssignmentDetail from '../modal/AssignmentDetail';
import Mypage from '../modal/MyPage';
import '../../css/modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div id="modal-overlay" onClick={this.modalClose} ></div>
        <div id="modal">
        { this.renderModal() }
        </div>
      </div>
    )
  }

  renderModal = () => {
    /* 
    0 => mypage 
    1 => 학생용 모달 
    2 => 선생님용 모달
    3 => 선생님용 모달 수정 버전
    4 => 과제 다운로드 모달
    */
    switch(this.props.state.id) {
      case 0 :
        return <Mypage />

      case 1 : case 2 : case 3 : case 4:
        return <AssignmentDetail 
                assignment = {this.props.selectedAssignment} 
                onClickHandler = {this.modalClose}
                id = {this.props.state.id}
               />

      default : return;
    }
  }

  modalClose = _ => this.props.actions.modalClick('')
}

export default Modal;