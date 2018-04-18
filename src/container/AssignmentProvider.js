import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: AssignmentConsumer } = Context;

class AssignmentProvider extends Component {
  state = {
    selectedSubject: '선택된 과목이 없습니다.',
    selectedAssignment: '선택된 과제가 없습니다.',
    selectedDate: '선택된 날짜가 없습니다.',
    Assignments: null
  }

  actions = {
    selectSubject: (subject) => {
      this.setState({
        selectedSubject: subject
      });
    },
    selectAssignment: (assignment) => {
      this.setState({
        selectedAssignment: assignment
      });
    },
    selectDate: (date) => {
      this.setState({
        selectedDate: date
      });
    },
    setAssignments: (assignments) => {
      this.setState({
        Assignments: assignments
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