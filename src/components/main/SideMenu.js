import React, { Component } from 'react';
import SideItem from './SideItem';
import '../../css/sideMenu.css';

class SideMenu extends Component{
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
      return <SideItem 
                key = {index}
                name = {subject}
                handleEvent = {this.handleClick} 
                styles = {state.subjects[state.selectedSubject] === subject ? 'selected-subject' : ''}
                index = {index}
              />
    })
  }

  handleClick = (subject) => {
    this.props.actions.setSubject(subject);
  }
}

export default SideMenu;