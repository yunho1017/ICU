import React, { Component } from 'react';
import Header from '../components/basic/Header';
import Modal from '../components/modal/Modal'
import { ModalConsumer } from '../context/ModalProvider';

class DefaultLayout extends Component {
  renderModal= (state, actions) => {
    if(state.isModal) return <Modal state={state} actions={actions} />;
  }
  render() {
    return (
      <ModalConsumer>
        {
          ({ state, actions }) => (
            <div>
              <Header />
                {this.props.children}
              {this.renderModal(state, actions)}
            </div>
          )
        }
      </ModalConsumer>
    )
  }
}

export default DefaultLayout;