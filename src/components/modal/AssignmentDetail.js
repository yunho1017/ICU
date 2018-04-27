import React from 'react';
import '../../css/assignmentDetail.css';
import { getDateFormat } from '../../common';

const AssignmentDetail = ({ assignment, onClickHandler }) => {
  return (
    <div id="assignment-modal-wrapper">
      <div className="assignment-modal-top-bottm top" >
        <img 
          src={require('../../assets/img/modal-close.png')} 
          alt="close-modal"
          onClick = {onClickHandler} 
        />
      </div>
      <div id="assignment-modal-contents-wrapper">
        <div className="assignment-detail-info">과제 명 : {assignment.title} </div>
        <div className="assignment-detail-info">작성자 : {assignment.auther} </div>
        <div className="assignment-detail-info">기간 : {getDateFormat(assignment.start) + ' ~ ' + getDateFormat(assignment.end)} </div>
        <div className="assignment-detail-info"> 
          <div className="assignment-detail-info">설명</div>
          <div id="assignment-detail-info">
            {assignment.detail} 
          </div>
        </div>
      </div>
      <div id="assignment-file-secion">
        <p>파일 첨부하기</p>
        <input type="file"/>
      </div>
      <div className="assignment-modal-top-bottm bottom">
        <div id="assignment-submit-btn">과제 제출</div>
      </div>
    </div>
  )
}

export default AssignmentDetail;