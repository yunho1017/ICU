import React, { Component } from 'react';
import { getDateFormat } from '../../common';
import AssignmentForStudent from './AssignmentForStudent';
import AssignmentForAdmin from './AssignmentForAdmin';
import AssignmentInfo from './AssignmentInfo';
import '../../css/modal.css';

class AssignmentModal extends Component {
  render(){
    const { assignment, onClickHandler } = this.props;
    const assingmentInfo = [
      {title: "과제명", contents: assignment.title},
      {title: "과목명", contents: assignment.subject},
      {title: "작성자", contents: assignment.auther},
      {title: "기간", contents: getDateFormat(assignment.start) + ' ~ ' + getDateFormat(assignment.end)},
      {title: "설명", contents: assignment.detail},
    ]
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
          {assingmentInfo.map((info, index) => {
            return <AssignmentInfo
                    key = {index}
                    title = {info.title}
                    contents = {info.contents}
                   />
          })}
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
        return <AssignmentForStudent />

      case 2 :
        return <AssignmentForAdmin 
                btnName = "수정하기"
               />
      
      case 3 : 
        return <AssignmentForAdmin 
                btnName = "수정완료"
               />

      case 4 : 
        return <AssignmentForAdmin 
                btnName = "다운로드"
               />


      default : return;
    }
  }
}

export default AssignmentModal;