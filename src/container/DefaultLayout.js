import React, { Component } from 'react';
import Header from '../components/basic/Header';
import Modal from '../components/modal/Modal';
import { MainConsumer } from '../context/MainProvider';

class DefaultLayout extends Component {
  render() {
    return (
      <MainConsumer>
        {
          ({ state, actions }) => (
            <div>
              <Header actions = {actions} />
              {this.props.children}
              {this.renderModal(state, actions)}
            </div>
          )
        }
      </MainConsumer>
    )
  }
  
  renderModal= (state, actions) => {
    if(state.modal.isModal) return <Modal state={state} actions={actions} />;
  }
}

export default DefaultLayout;