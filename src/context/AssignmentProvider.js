import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: AssignmentConsumer } = Context;

class AssignmentProvider extends Component {
  state = {
    subjects: ['소프트웨어 공학'],
    selectedSubject: 'default',
    selectedAssignment: null,
    selectedDate: new Date(),
    assignments: {
      'default' : [],
      '소프트웨어 공학' : [{
        'title': '프로젝트 제안서 제출',
        'allDay': true,
        'start': new Date(2018, 3, 3),
        'end': new Date(2018, 3, 3)
      }],
    }
  }

  actions = {
    selectSubject: (subject) => {
      this.setState({
        selectedSubject: subject
      });
    },
    selectAssignment: (assignment) => {
      this.setState({
        selectedAssignment: assignment,
        selectedDate: null
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