import React, { Component } from 'react';
import AssignmentSection from '../components/main/AssignmentSection';
import { AssignmentConsumer } from '../context/AssignmentProvider';
import SubjectList from '../components/main/SubjectList';
import '../css/main.css'

class Main extends Component{
  render() {
    return (
      <AssignmentConsumer>
        {
          ({ state, actions }) => (
            <div id="main-section">
              <SubjectList actions={actions} state={state} />
              <AssignmentSection actions={actions} state={state} />
            </div>
          )
        }
      </AssignmentConsumer>
    )
  }
}

export default Main;