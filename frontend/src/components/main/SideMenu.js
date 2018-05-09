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
                key = {subject.id}
                id = {subject.id}
                name = {subject.name}
                handleEvent = {this.handleClick} 
                styles = {this.props.selectedSubject === subject.id ? 'selected-subject' : ''}
                index = {index}
              />
    })
  }

  handleClick = (id) => {
    this.props.selectSubject(id);
  }
}

export default SideMenu;