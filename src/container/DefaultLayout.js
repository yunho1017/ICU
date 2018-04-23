import React, { Component } from 'react';
import Header from '../components/basic/Header';
import Modal from '../components/modal/Modal';
import SideMenu from '../components/main/SideMenu';
import { ModalConsumer } from '../context/ModalProvider';
import { MainConsumer } from '../context/MainProvider';
import { AdminConsumer } from '../context/AdminProvider';
import { browserHistory } from 'react-router';

class DefaultLayout extends Component {
  render() {
    return (
      <ModalConsumer>
        { ({ state, actions }) => (
            <div>
              <Header state = {state} actions = {actions} />
              {this.renderSidemenu()}
              {this.props.children}
              {this.renderModal(state, actions)}
            </div>
          )}
      </ModalConsumer>
    )
  }
  
  renderModal = (state, actions) => {
    if(state.isModal) return <Modal state={state} actions={actions} />;
  }

  renderSidemenu = () => {
    const location = browserHistory.getCurrentLocation().pathname;
    switch(location) {
      case '/main' : 
        return (
          <MainConsumer>
            { ({ state, actions }) => <SideMenu actions={actions} state={state} />}
          </MainConsumer> 
        )
      case '/main/admin' : 
        return (
          <AdminConsumer>
            { ({ state, actions }) => <SideMenu actions={actions} state={state} />}
          </AdminConsumer> 
        )
      default : return;
    }
  }
}

export default DefaultLayout;