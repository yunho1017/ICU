import React from 'react';
import '../../css/headerBtn.css';

const HeaderBtn = ({ content, handleEvent }) => {
  return (
    <div className="header-btn" onClick= {() => handleEvent(content)}>{content}</div>
  )
}

export default HeaderBtn;