import React from 'react';
import '../../css/modal.css';

const AssignmentConfirm = ({ clickEventHandler, btnName }) => {
  return (
    <div className="assignment-modal-top-bottm bottom">
      <div id="assignment-submit-btn">{btnName}</div>
    </div>
  )
}

export default AssignmentConfirm;