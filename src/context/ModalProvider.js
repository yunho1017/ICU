import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: ModalConsumer } = Context;

class ModalProvider extends Component {
  state = {
    isModal: false,
    id: ''
  }

  actions = {
    click: (id) => {
      this.setState({
        isModal: !this.state.isModal,
        id: id
      })
    }
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
  ModalProvider,
  ModalConsumer
}