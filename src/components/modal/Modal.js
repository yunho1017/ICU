import React, { Component } from 'react';
import Mypage from '../modal/MyPage';
import AssignmentDetail from '../modal/AssignmentDetail';
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
    const { state } = this.props;
    
    switch(state.modal.id) {
      case 'mypage' :
        return <Mypage />
      case 'assignment' :
        return <AssignmentDetail assignment = {state.data} />
      default : return;
    }
  }
}

export default Modal;