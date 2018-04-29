import React, { Component } from 'react';
import { getDateFormat } from '../../common';
import AssignmentByAdmin from './AssignmentByAdmin';
import AssignmentInfo from './AssignmentInfo';
import '../../css/modal.css';

class AssignmentModify extends Component {
  render(){
    const { assignment, onClickHandler } = this.props;
    const assingmentInfo = [
      {title: "과제명", contents: assignment.title},
      {title: "작성자", contents: assignment.auther},
      {title: "가간", contents: getDateFormat(assignment.start) + ' ~ ' + getDateFormat(assignment.end)},
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
        <AssignmentByAdmin 
          btnName = "수정완료"
        />
      </div>
    )
  }
}

export default AssignmentModify;