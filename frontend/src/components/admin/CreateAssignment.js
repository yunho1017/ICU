import React from 'react';
import { getDateFormat } from '../../common';
import '../../css/createAssignment.css';

const CreateAssignment = ({ selectedDate: { start: startDate }, selectedDate: { end: endDate } }) => {
  return (
    <div id = "create-assignment-section">
      <div className="assignment-input-wrapper">
        <div className="assignment-input-title">과제명</div>  
        <div className="assignment-input-contents">
          <input className="assignment-input" type="text"/>
        </div>
      </div>
      <div className="assignment-input-wrapper">
        <div className="assignment-input-title">과목명</div>  
        <div className="assignment-input-contents">
          <input className="assignment-input" type="text"/>
        </div>
      </div>
      <div className="assignment-input-wrapper">
        <div className="assignment-input-title">기간</div>  
        <div className="assignment-input-contents">
          <div className="assignment-input-dropdown">
            {getDateFormat(startDate)} 
            {/* <div className="dropdown-section">

            </div> */}
          </div>
          <span>~</span>
          <div className="assignment-input-dropdown">
            {getDateFormat(endDate)}
            {/* <div className="dropdown-section">

            </div> */}
          </div>
        </div>
      </div>
      <div className="assignment-input-wrapper">
        <div className="assignment-input-title">설명</div>  
        <div className="assignment-input-contents">
          <input className="assignment-input" type="text"/>
        </div>
      </div>
          <div id="assignment-upload-btn">과제 업로드</div>
    </div>
  )
}

export default CreateAssignment;