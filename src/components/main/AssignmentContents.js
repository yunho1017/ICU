import React from 'react';
import Assignment from './Assignment';
import '../../css/assignmentContents.css';

const AssignmentContents = ({ assignments }) => {
  const renderAssignment = () => {
    return assignments.map((assignment, index) => {
      return <Assignment 
                key= {index}
                title= {assignment.title}
                info= {assignment.info} 
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