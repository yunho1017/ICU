import React from 'react';
import '../../css/assignmentDetail.css'

const AssignmentDetail = ({ assignment }) => {
  return (
    <div id="assignment-detail-wrapper">
      <div className="assignment-input-wrapper">
        <p>제목</p>
        {assignment.title}
      </div>
      <div className="assignment-input-wrapper">
      </div>
      <div className="assignment-input-wrapper">
        <p>설명</p>
        {assignment.detail}
      </div>
      <div id="assignment-submit-wrapper">

      </div>
    </div>
  )
}

export default AssignmentDetail;