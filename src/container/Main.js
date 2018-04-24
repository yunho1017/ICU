import React, { Component } from 'react';
import AssignmentSection from '../components/main/AssignmentSection';
import { ModalConsumer } from '../context/ModalProvider';
import '../css/main.css';

class Main extends Component{
  render() {
    return (
      <div id="main-section">
        <ModalConsumer>
          { (modal) => <AssignmentSection modalActions = {modal.actions} />}
        </ModalConsumer> 
      </div>
    )
  }
}

export default Main;