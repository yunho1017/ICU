import React from 'react';
import '../../css/sideItem.css'

const SideItem = ({ id, name, handleEvent, styles, index }) => {
  return <div className= {"subject "+styles} onClick={() => handleEvent(id)} > {name}</div>
}

export default SideItem;