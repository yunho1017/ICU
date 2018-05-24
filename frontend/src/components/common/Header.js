import React from 'react';
import HeaderBtn from './HeaderBtn';
import '../../css/header.css';

const Header = (props) => (
  <div id="header-section">
    <HeaderBtn content = "내정보" handleEvent = {props.actions.modalClick} />
    <HeaderBtn content = "로그아웃" handleEvent = {props.clickLogout}/>
  </div>
);

export default Header;