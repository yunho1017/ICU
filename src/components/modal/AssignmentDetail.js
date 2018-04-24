import React from 'react';
import '../../css/assignmentDetail.css'

const AssignmentDetail = ({ assignment }) => {
  const getDateFormat = (date) => {
    return (date.getMonth() + 1) + '/' + (date.getDate());
  }

  return (
    <div id="assignment-detail-wrapper">
      <div className="assignment-input-wrapper">
        <span>과제 명 : </span> 
        {assignment.title}
      </div>
      <div className="assignment-input-wrapper">
        <span>작성자 : </span> 
        {assignment.auther}
      </div>
      <div className="assignment-input-wrapper">
        <span>기간 : </span> 
        {getDateFormat(assignment.start) + ' ~ ' + getDateFormat(assignment.end)}
      </div>
      <p>설명</p>
      {assignment.detail}
      <div id="assignment-submit-wrapper">
        <p>과제 제출</p>
        <div id="assignment-submit-place">
          <input type="file"/>
          <div id="submit-btn">과제 제출</div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentDetail;