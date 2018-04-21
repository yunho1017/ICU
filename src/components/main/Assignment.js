import React from 'react';
import '../../css/assignmentContents.css';

const Assignment = ({ title, handleEvent, auther, detail }) => {
  return (
    <div className="item">
        {title}
        {auther}
        {detail}
        <div className="submit-btn" onClick={() => handleEvent('과제 제출')} >과제 제출</div>
    </div>
  )
}
export default Assignment;