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
    return this.props.items.map((item, index) => {
      return <SideItem 
                key = {item.id}
                id = {item.id}
                name = {item.name}
                handleEvent = {this.handleClick} 
                styles = {this.props.selectedItem === item.id ? 'selected-subject' : ''}
                index = {index}
              />
    })
  }

  handleClick = (id) => {
    this.props.selectItem(id);
  }
}

export default SideMenu;