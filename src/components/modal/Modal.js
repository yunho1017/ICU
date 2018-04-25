import React, { Component } from 'react';
import AssignmentDetail from '../modal/AssignmentDetail';
import Mypage from '../modal/MyPage';
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
    /* 
    0 => mypage 
    1 => 학생용 모달 
    2 => 선생님용 모달
    3 => 선생님용 모달 수정 버전
    */
    switch(this.props.state.id) {
      case 0 :
        return <Mypage />
      case 1 :
        return <AssignmentDetail assignment = {this.props.selectedAssignment} />
      case 2 :
        return <AssignmentDetail assignment = {this.props.selectedAssignment} />
      case 3 :
        return <AssignmentDetail assignment = {this.props.selectedAssignment} />
      default : return;
    }
  }
}

export default Modal;