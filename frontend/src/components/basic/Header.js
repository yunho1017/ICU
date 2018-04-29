import React from 'react';
import { browserHistory } from 'react-router';
import HeaderBtn from './HeaderBtn';
import '../../css/header.css';

const Header = (props) => (
  <div id="header-section">
    <HeaderBtn content = "내정보" handleEvent = {props.actions.modalClick} />
    <HeaderBtn content = "로그아웃" handleEvent = {() => browserHistory.push('/signin')}/>
  </div>
);

export default Header;