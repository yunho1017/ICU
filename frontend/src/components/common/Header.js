import React from 'react';
import HeaderBtn from './HeaderBtn';
import * as authAction from '../../action/auth';
import '../../css/header.css';

const Header = (props) => (
  <div id="header-section">
    <HeaderBtn content = "내정보" handleEvent = {props.actions.modalClick} />
    <HeaderBtn content = "로그아웃" handleEvent = {() => {authAction.logout()}}/>
  </div>
);

export default Header;