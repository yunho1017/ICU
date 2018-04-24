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
    switch(this.props.state.id) {
      case 'mypage' :
        return <Mypage />
      case 'assignment' :
        return <AssignmentDetail assignment = {this.props.selectedAssignment} />
      default : return;
    }
  }
}

export default Modal;