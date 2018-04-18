import React, { Component } from 'react';
import AssignmentSection from '../components/main/AssignmentSection';
import { AssignmentConsumer } from '../context/AssignmentProvider';
import '../css/main.css'

class Main extends Component{
  render() {
    return (
      <AssignmentConsumer>
        {
          ({ state, actions }) => (
            <div id="main-section">
              <AssignmentSection actions={actions} state={state} />
            </div>
          )
        }
      </AssignmentConsumer>
    )
  }
}

export default Main;