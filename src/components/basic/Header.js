import React, { Component } from 'react';
import HeaderBtn from './HeaderBtn';
import { browserHistory } from 'react-router';
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
      <div id="header-section">
        <HeaderBtn content = "내정보" handleEvent = {this.props.actions.modalClick} />
        <HeaderBtn content = "로그아웃" handleEvent = {() => browserHistory.push('/signin')}/>
      </div>
    )
  }
}

export default Header;