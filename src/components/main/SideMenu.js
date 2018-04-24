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
    return this.props.subjects.map((subject, index) => {
      return <SideItem 
                key = {index}
                name = {subject}
                handleEvent = {this.handleClick} 
                styles = {this.props.selectedSubject === subject ? 'selected-subject' : ''}
                index = {index}
              />
    })
  }

  handleClick = (subject) => {
    this.props.selectSubject(subject);
  }
}

export default SideMenu;