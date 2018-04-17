import React, { Component } from 'react';
import SubjectList from '../components/main/SubjectList';
import AssignmentSection from '../components/main/AssignmentSection';
import '../css/main.css'

class Main extends Component{
  render() {
    return (
      <div id="main-section">
        <SubjectList />
        <AssignmentSection />
      </div>
    )
  }
}

export default Main;