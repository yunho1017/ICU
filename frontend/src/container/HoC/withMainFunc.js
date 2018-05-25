import React, { Component } from 'react';
import * as action from '../../action/request';

const withMainFunc = (isAdmin) => (WrappedComponent) => {
  return class extends Component {
    state = {
      selectedDate: new Date().getMonth() + 1
    }

    changeMonth = month => {
      this.setState({
        selectedDate: month
      });

      this.props.setAssign
    }

    async componentDidMount() {
      await this.props.setDateForAdmin();
      await this.props.setSubject(localStorage.getItem('token'), true);
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
        />
      )
    }
  }
}

export default withSigninFunc;