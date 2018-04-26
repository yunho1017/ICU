import { actionTypes } from '../action/assignment';

const initialState = {
  subjects: ['소프트웨어 공학'],
  selectedSubject:  0,
  selectedDate: { 
    start: new Date(),
    end: new Date()
  },
  assignments: {
    '소프트웨어 공학' : [{
      key: 123,
      subject: '소프트웨어 공학',
      title: '프로젝트 제안서 제출',
      detail: '프로젝트 제안서를 제출하시오',
      auther: '양은정',
      color: '#ffa78c',
      start: new Date(2018, 3, 3),
      end: new Date(2018, 3, 7)
    },
    {
      key: 124,
      subject: '소프트웨어 공학',
      title: '프로젝트 제안서 제출',
      detail: '프로젝트 제안서를 제출하시오',
      auther: '양은정',
      color: '#ffa78c',
      start: new Date(2018, 3, 26),
      end: new Date(2018, 3, 26)
    }]
  },
  assignmentsCardList: [],
  selectedAssignment: null,
}

const student = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STUDENT_SET_DATE:
      let defaultDate = {
        start: new Date(state.selectedDate.start),
        end: new Date(state.selectedDate.end)
      }
      defaultDate.start.setHours(0,0,0);
      defaultDate.end.setHours(0,0,0);
      return { ...state,
        selectedDate: defaultDate
      }
    case actionTypes.STUDENT_SELECT_SUBJECT: 
      return { ...state,
        selectedSubject: action.subject,
        assignmentsCardList: []
      }
    case actionTypes.STUDENT_SELECT_DATE:
      return { ...state,
        selectedDate: action.date
      }
    case actionTypes.STUDENT_SET_ASSIGNMENTS:
      return { ...state,
        assignments: action.assignments
      }
    case actionTypes.STUDENT_SET_ASSIGNMENT_CARD_LIST:
      return { ...state, 
        assignmentsCardList: action.assignments
      }
    case actionTypes.STUDENT_SELECT_ASSIGNMENT:
      return { ...state,
        selectedAssignment: action.assignment
      }
    default : return state;
  }
}

export default student;