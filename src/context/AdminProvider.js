import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: AdminConsumer } = Context;

class AdminProvider extends Component {
  state = {
    subjects: ['과제 업로드', '과제 다운로드'],
    selectedSubject:  0
  }

  actions = {
    setSubject: (subject) => {
      this.setState({ ...this.state,
        selectedSubject: subject
      });
    },
  }
  
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AdminProvider,
  AdminConsumer
}