import React, { Component } from 'react';
import { ModalProvider } from './context/ModalProvider';
import { Provider } from 'react-redux';
import { store } from './store/index';

class IndexProvider extends Component {
  render() {
    return (
      <Provider store = {store}>
        <ModalProvider>
          {this.props.children}
        </ModalProvider>
      </Provider>
    )
  }
}

export default IndexProvider;