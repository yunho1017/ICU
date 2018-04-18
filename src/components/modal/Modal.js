import React, { Component } from 'react';
import '../../css/modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div id="modal-overlay" onClick={() => this.props.actions.click('')}></div>
        <div id="modal"></div>
      </div>
    )
  }
}

export default Modal;