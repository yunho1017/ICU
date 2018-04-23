import React, { Component } from 'react';
import Subject from './Subject';
import '../../css/subjectList.css';

class SubjectList extends Component{
  render() {
    return(
      <div id="subject-section">
        <div id="subject-list">
          {this.subjectRender()}
        </div>
      </div>
    )
  }

  subjectRender = () => {
    const { state } = this.props;
    return state.subjects.map((subject, index) => {
      return <Subject 
                key = {index}
                name = {subject}
                handleEvent = {this.handleClick} 
                styles = {state.subjects[state.selectedSubject] === subject ? 'selected-subject' : ''}
                index = {index}
              />
    })
  }

  handleClick = (subject) => {
    this.props.actions.selectSubject(subject);
  }
}

export default SubjectList;