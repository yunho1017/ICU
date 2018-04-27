import React from 'react';
import '../../css/assignmentDetail.css';

const AssignmentSubmit = ({}) => {
  return (
    <React.Fragment> 
      <div id="assignment-file-secion">
        <p>파일 첨부하기</p>
        <input type="file"/>
      </div>
      <div className="assignment-modal-top-bottm bottom">
        <div id="assignment-submit-btn">과제 제출</div>
      </div>
    </React.Fragment>
  )
}

export default AssignmentSubmit;