import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionTypes from '../action/auth';
import '../css/signin.css'

class Signin extends Component {
  state = {
    id: '',
    pwd: '',
  }
  
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
          <div id="signin-btn" onClick={this.login}>로그인</div>
          <div id="signin-sub-btn">
            <span>선생님이세요?</span>
            <span>아이디/비밀번호 찾기</span>
          </div>
        </div>
      </div>
    )
  }
  login= () => {
    this.props.signin({id: 'nn', pwd:'123'}, false);
  }
}

const mapStateToProps= (state) => {
  return {
  } 
}
  
const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);