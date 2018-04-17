import React, { Component } from 'react';
import Subject from './Subject';
import '../../css/subjectList.css';

class SubjectList extends Component{
  state = { SubjectList: ['소프트웨어 공학', '프로젝트 실무', '웹프로젝트', '체육', '환경', '진로'] }

  subjectRender= () => {
    return this.state.SubjectList.map((subject, index) => {
      return <Subject key= {index}
                      name= {subject}
                      clickEvnt= {this.clickSubject} />
    })
  }

  clickSubject= (name) => {
    console.log(name);
  }

  render() {
    return(
      <div id="subject-list-wrapper">
        {this.subjectRender()}
      </div>
    )
  }
}

export default SubjectList;