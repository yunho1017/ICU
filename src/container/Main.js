import React, { Component } from 'react';
import AssignmentSection from '../components/main/AssignmentSection';
import { MainConsumer } from '../context/MainProvider';
import SubjectList from '../components/main/SubjectList';
import '../css/main.css'

class Main extends Component{
  render() {
    return (
      <MainConsumer>
        {
          ({ state, actions }) => (
            <div id="main-section">
              <SubjectList actions={actions} state={state.data} />
              <AssignmentSection actions={actions} state={state} />
            </div>
          )
        }
      </MainConsumer>
    )
  }
}

export default Main;