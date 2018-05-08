import React, { Component } from 'react';
import '../css/signin.css'

class Signup extends Component {
  render() {
    return (
      <div id="signin-section">
        <div id="signin-wrapper">
          <div className="signin-input-wrapper">
            <div className="signin-img"></div>
            <input className="signin-input" placeholder="id"/>
          </div>
          <div className="signin-input-wrapper">
            <div className="signin-img"></div>
            <input className="signin-input" type="password" placeholder="password"/>
          </div>
          <div id="signin-btn">DMS로 로그인</div>
        </div>
      </div>
    )
  }
}

export default Signup;