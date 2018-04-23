import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: MainConsumer } = Context;

class MainProvider extends Component {
  state = {
    subjects: ['소프트웨어 공학', '웹프로젝트', '프로젝트 실무'],
    selectedSubject:  0,
    selectedDate: {
      start: new Date()
    },
    assignments: {
      '소프트웨어 공학' : [{
        key: 123,
        subject: '과목',
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      }],
      '웹프로젝트': [],
      '프로젝트 실무': []
    },
    assignmentsCardList: [],
    selectedCard: null,
  }

  actions = {
    setSubject: (subject) => {
      this.setState({ ...this.state,
        selectedSubject: subject
      });
    },
    setDate: (data) => {
      this.setState({ ...this.state,
        selectedDate: {
          start: data.start,
          end: data.end
        }
      });
    },
    setAssignments: (assignments) => {
      this.setState({ ...this.state,
        assignments: assignments
      });
    },
    setAssignmentsCardList: (assignments) => {
      this.setState({ ...this.state,
        assignmentsCardList: assignments
      });
    },
    setAssignmentsCard: (assignment) => {
      this.setState({ ...this.state,
        selectedCard: assignment
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
  MainProvider,
  MainConsumer
}