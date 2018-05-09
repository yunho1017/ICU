import { actionTypes } from '../action/student';
import { studentDefaultState } from '../config';

const student = (state = studentDefaultState, action) => {
  switch(action.type) {
    case actionTypes.STUDENT_SET_DATE:
      let defaultDate = {
        start: new Date(state.selectedDate.start),
        end: new Date(state.selectedDate.end)
      };
      defaultDate.start.setHours(0,0,0,0);
      defaultDate.end.setHours(0,0,0,0);
      
      return { ...state,
        selectedDate: defaultDate
      }

    case actionTypes.STUDENT_SELECT_SIDE_ITEM: 
      return { ...state,
        selectedSubject: action.item,
        assignmentsCardList: []
      }

    case actionTypes.STUDENT_SELECT_DATE:
      return { ...state,
        selectedDate: action.date
      }

      case actionTypes.STUDENT_SET_ASSIGNMENT_CARD_LIST:
      return { ...state, 
        assignmentsCardList: action.assignments
      }
      
      case actionTypes.STUDENT_SELECT_ASSIGNMENT:
      return { ...state,
        selectedAssignment: action.assignment
      }
      
      case actionTypes.STUDENT_SET_ASSIGNMENT:
        return { ...state,
          assignments: action.assignments
        }
    
      case actionTypes.STUDENT_SET_SUBJECT:
        return { ...state,
          subjects: action.subjects
        }
        
      default : return state;
    }
  }
  
export default student;