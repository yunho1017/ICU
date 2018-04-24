import { actionTypes } from '../action/assignment';

const initialState = {
  subjects: ['과제 업로드', '과제 다운로드'],
  selectedSubject: 0,
  selectedDate: {
    start: new Date()
  },
  assignments: [{
    key: 123,
    subject: '과목',
    title: '프로젝트 제안서 제출',
    detail: '프로젝트 제안서를 제출하시오',
    auther: '양은정',
    color: '#ffa78c',
    start: new Date(2018, 3, 3),
    end: new Date(2018, 3, 7)
  },
  {
    key: 123,
    subject: '과목',
    title: '프로젝트 제안서 제출',
    detail: '프로젝트 제안서를 제출하시오',
    auther: '양은정',
    color: '#ffa78c',
    start: new Date(2018, 3, 3),
    end: new Date(2018, 3, 7)
  },
  {
    key: 123,
    subject: '과목',
    title: '프로젝트 제안서 제출',
    detail: '프로젝트 제안서를 제출하시오',
    auther: '양은정',
    color: '#ffa78c',
    start: new Date(2018, 3, 3),
    end: new Date(2018, 3, 7)
  }]
}

const admin = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADMIN_SELECT_SUBJECT: 
      return { ...state,
        selectedSubject: action.subject,
        assignmentsCardList: []
      }
    default : return state;
  }
}

export default admin;