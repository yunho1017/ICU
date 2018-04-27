import React, { Component } from 'react';
import { getDateFormat } from '../../common';
import AssignmentSubmit from './AssignmentSubmit';
import '../../css/assignmentDetail.css';

class AssignmentDetail extends Component {
  render(){
    const { assignment, onClickHandler } = this.props;
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
        {this.renderModalMode(this.props.id)}
      </div>
    )
  }

  renderModalMode = (mode) => {
    /* 
    0 => mypage 
    1 => 학생용 모달 
    2 => 선생님용 모달
    3 => 선생님용 모달 수정 버전
    4 => 과제 다운로드 모달
    */
    switch(mode) {
      case 1 :
        return <AssignmentSubmit />

      case 2 :
        return <AssignmentSubmit />
      
      case 3 : 
        return <AssignmentSubmit />

      case 4 : 
        return <AssignmentSubmit />

      default : return;
    }
  }
}

export default AssignmentDetail;