import React from 'react';
import '../../css/headerBtn.css';

const HeaderBtn = ({ content, handleEvent }) => {
  return (
    <div className="header-btn" onClick= {() => handleEvent('mypage')}>{content}</div>
  )
}

export default HeaderBtn;