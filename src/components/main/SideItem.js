import React from 'react';
import '../../css/sideItem.css'

const SideItem = ({ name, handleEvent, styles, index }) => {
  return <div className= {"subject "+styles} onClick={() => handleEvent(index)} > {name}</div>
}

export default SideItem;