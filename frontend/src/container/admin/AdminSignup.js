import React, { Component } from 'react';
import { Circle } from 'react-color';
import '../../css/signin.css'

class AdminSignup extends Component {
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
          <div className="signin-input-wrapper">
            <div className="signin-img"></div>
            <input className="signin-input" placeholder="name"/>
          </div>
          <div className="signin-input-wrapper">
            <div className="signin-img"></div>
            <div>
              <Circle/>
            </div>
          </div>
          <div id="signin-btn">회원가입</div>
        </div>
      </div>
    )
  }
}

export default AdminSignup;