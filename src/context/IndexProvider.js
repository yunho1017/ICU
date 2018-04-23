import React, { Component } from 'react';
import { MainProvider } from './MainProvider';
import { AdminProvider } from './AdminProvider';
import { ModalProvider } from './ModalProvider';

class IndexProvider extends Component {
  render() {
    return (
      <MainProvider>
        <AdminProvider>
          <ModalProvider>
            {this.props.children}
          </ModalProvider>
        </AdminProvider>
      </MainProvider>
    )
  }
}

export default IndexProvider;