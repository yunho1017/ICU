import React from 'react';
import '../../css/assignmentContents.css';

const Assignment = ({ title, info }) => {
  return (
    <div className="item">
        {title}
        <div className="submit-btn">과제 제출</div>
    </div>
  )
}
export default Assignment;