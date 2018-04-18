import React from 'react';
import Assignment from './Assignment';
import '../../css/assignmentContents.css';

const AssignmentContents = ({ assignments, selectedDate, selectedAssignment }) => {
  const renderAssignment = () => {
    return assignments.map((assignment, index) => { 
      if(!(!!selectedDate ? assignment.start >= selectedDate.start && assignment.end <= selectedDate.end : true)) return;
      if(!(!!selectedAssignment ? assignment.title === selectedAssignment : true)) return;
      return <Assignment 
                key= {index}
                title= {assignment.title} 
              />
    })
  }
  return (
    <div id="assignment-contents-wrapper">
      {renderAssignment()}
    </div>
  )
}
export default AssignmentContents;