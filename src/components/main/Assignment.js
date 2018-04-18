import React from 'react';
import '../../css/assignmentContents.css';

const Assignment = ({ title, clickEvnt }) => {
  return (
    <div className="item">
        {title}
        <div className="submit-btn" onClick={() => clickEvnt('과제 제출')} >과제 제출</div>
    </div>
  )
}
export default Assignment;