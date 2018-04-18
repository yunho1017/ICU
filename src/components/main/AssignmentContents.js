import React from 'react';
import Assignment from './Assignment';
import { ModalConsumer } from '../../context/ModalProvider';
import '../../css/assignmentContents.css';

const AssignmentContents = ({ assignments, selectedDate, selectedAssignment }) => {
  const renderAssignment = (actions) => {
    return assignments.map((assignment, index) => { 
      if(!(!!selectedDate ? assignment.start >= selectedDate.start && assignment.end <= selectedDate.end : true)) return;
      if(!(!!selectedAssignment ? assignment.title === selectedAssignment : true)) return;
      return <Assignment 
                key = {index}
                title = {assignment.title}
                clickEvnt = {actions.click} 
              />
    })
  }
  return (
    <ModalConsumer>
      {
        ({ actions }) => (
          <div id="assignment-contents-wrapper">
            {renderAssignment(actions)}
          </div>
        )
      }
    </ModalConsumer>
  )
}
export default AssignmentContents;