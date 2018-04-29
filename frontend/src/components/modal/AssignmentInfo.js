import React from 'react';
import '../../css/modal.css';

const AssignmentInfo = ({ title, contents }) => {
  return (
    <div className="assignment-detail-wrapper">
      <div className="assignment-detail-info-title">{title}</div>  
        <div className="assignment-detail-contents">
          {contents} 
        </div>
    </div>
  )
}

export default AssignmentInfo;