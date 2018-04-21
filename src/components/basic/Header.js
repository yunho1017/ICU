import React, { Component } from 'react';
import HeaderBtn from './HeaderBtn';
import { ModalConsumer } from '../../context/ModalProvider';
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
      <ModalConsumer>
        {
          ({ state, actions }) => (
            <div id="header-section">
              <HeaderBtn content = "내정보" handleEvent = {actions.click} />
              <HeaderBtn content = "로그아웃" />
            </div>
          )
        }
      </ModalConsumer>
    )
  }
}

export default Header;