import React from 'react';
import '../../css/assignmentContents.css';

const Assignment = ({ title, info }) => {
  return (
    <div className="item">
        {title}
        <ul> {info} </ul>
    </div>
  )
}
export default Assignment;