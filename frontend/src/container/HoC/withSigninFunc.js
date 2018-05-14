import React, { Component } from 'react';
import * as action from '../../action/auth';

const withSigninFunc = (isAdmin) => (WrappedComponent) => {
  return class extends Component {
    state = {
      id: '',
      pwd: '',
    }

    signin = async () => {
      if(!this.state.id || !this.state.pwd) return alert('아이디 혹은 비밀번호를 입력하세요!');
      await action.signin({id: this.state.id, pwd: this.state.pwd}, isAdmin);
    }
  
    idInput = (e) => {
      this.setState({
        id: e.target.value
      });
    }
  
    pwdInput = (e) => {
      this.setState({
        pwd: e.target.value
      });
    }
  
    enterEventHanlder = (e) => {
      if(e.keyCode === 13) {
        this.signin();
      }
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          id = {this.state.id}
          pwd = {this.state.pwd}
          isAdmin = {isAdmin}
          signin = {this.signin}
          idInput = {this.idInput}
          pwdInput = {this.pwdInput}
          changeIsAdmin = {this.changeIsAdmin}
          enterEventHanlder = {this.enterEventHanlder}
        />
      )
    }
  }
}

export default withSigninFunc;