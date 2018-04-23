import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: MainConsumer } = Context;

class MainProvider extends Component {
  state = {
    data: {
      subjects: ['소프트웨어 공학', '웹프로젝트', '프로젝트 실무'],
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
        }],
        '웹프로젝트': [],
        '프로젝트 실무': []
      },
      assignmentsCardList: []
    },
    modal: {
      isModal: false,
      id: null
    }
  }

  actions = {
    selectSubject: (subject) => {
      const newState = {
        ...this.state.data,
        selectedSubject: subject
      }
      this.setState({
        data: newState
      });
    },
    selectDate: (date) => {
      const newState = {
        ...this.state.data,
        selectedDate: date
      }
      this.setState({
        data: newState
      });
    },
    setAssignments: (assignments) => {
      const newState = {
        ...this.state.data,
        assignments: assignments
      }
      this.setState({
        data: newState
      });
    },
    setAssignmentsCardList: (assignments) => {
      const newState = {
        ...this.state.data,
        assignmentsCardList: assignments
      }
      this.setState({
        data: newState
      });
    },
    modalClick: (id) => {
      const newState = {
        isModal: !this.state.modal.isModal,
        id: id
      }
      this.setState({
        modal: newState
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