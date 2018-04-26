import { actionTypes } from '../action/assignment';
import { adminDefaultState } from '../config';

const admin = (state = adminDefaultState, action) => {
  switch(action.type) {
    case actionTypes.ADMIN_SELECT_SUBJECT: 
      return { ...state,
        selectedSubject: action.subject,
        assignmentsCardList: []
      }
    case actionTypes.ADMIN_SELECT_DATE:
      return { ...state,
        selectedDate: action.date
      }
    case actionTypes.ADMIN_SELECT_ASSIGNMENT:
      return { ...state,
        selectedAssignment: action.assignment
      }
    default : return state;
  }
}

export default admin;