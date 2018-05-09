import { actionTypes } from '../action/assignment';
import { adminDefaultState } from '../config';

const admin = (state = adminDefaultState, action) => {
  switch(action.type) {
    case actionTypes.ADMIN_SELECT_SUBJECT: 
      return { ...state,
        selectedItem: action.subject,
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

    case actionTypes.ADMIN_SET_DATE:
      let defaultDate = {
        start: new Date(state.selectedDate.start),
        end: new Date(state.selectedDate.end)
      };
      defaultDate.start.setHours(0,0,0,0);
      defaultDate.end.setHours(0,0,0,0);
      
      return { ...state,
        selectedDate: defaultDate
      }

    default : return state;
  }
}

export default admin;