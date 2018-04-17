import React, { Component } from 'react';
import '../css/main.css'
import SubjectList from '../components/main/SubjectList';

class Main extends Component{
  render() {
    return (
      <div id="main-section">
        <SubjectList/>
      </div>
    )
  }
}

export default Main;