import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: AssignmentConsumer } = Context;

class AssignmentProvider extends Component {
  state = {
    subjects: ['소프트웨어 공학', '웹프로젝트'],
    selectedSubject:  0,
    selectedDate: {
      start: new Date()
    },
    assignments: {
      '소프트웨어 공학' : [{
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      }, {
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      },
      {
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      },
      {
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      },],
      '웹프로젝트': []
    }
  }

  actions = {
    selectSubject: (subject) => {
      this.setState({
        selectedSubject: subject
      });
    },
    selectDate: (date) => {
      this.setState({
        selectedDate: date,
        selectedAssignment: null
      });
    },
    setAssignments: (assignments) => {
      this.setState({
        assignments: assignments
      });
    }
  }
  
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AssignmentProvider,
  AssignmentConsumer
}