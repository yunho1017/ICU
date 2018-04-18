import React, { Component } from 'react';
import HeaderNav from '../components/basic/HeaderNav';
import Footer from '../components/basic/Footer';
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
              <HeaderNav />
                {this.props.children}
              <Footer />
              {this.renderModal(state, actions)}
            </div>
          )
        }
      </ModalConsumer>
    )
  }
}

export default DefaultLayout;