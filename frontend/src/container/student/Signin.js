import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withSigninFunc from '../HoC/withSigninFunc';
import '../../css/signin.css'

class Signin extends Component {
  render() {
    return (
      <div id="signin-section" onKeyDown={this.props.enterEventHanlder}>
        <div id="signin-wrapper">
          <div className="signin-input-wrapper">
            <div className="signin-img"><img src={require('../../assets/img/signin_id.png')} alt="id"/></div>
            <input className="signin-input" placeholder="id" value= {this.props.id} onChange={this.props.idInput}/>
          </div>
          <div className="signin-input-wrapper">
            <div className="signin-img"><img src={require('../../assets/img/signin_pwd.png')} alt="pwd"/></div>
            <input className="signin-input" type="password" placeholder="password" value= {this.props.pwd} onChange={this.props.pwdInput}/>
          </div>
          <div id="signin-btn" onClick={this.props.signin}>학생 로그인</div>
          <div id="signin-sub-btn">
            <span onClick={this.props.changeIsAdmin}>선생님이세요?</span>
            <span>아이디/비밀번호 찾기</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withSigninFunc(false)(Signin));