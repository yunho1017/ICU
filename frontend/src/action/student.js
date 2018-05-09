//학생 관련 action, action 생성자
export const actionTypes = {
  STUDENT_SET_DATE: 'STUDENTS_SET_DATE',
  STUDENT_SELECT_DATE: 'STUDENT_SELECT_DATE',
  STUDENT_SELECT_SUBJECT: 'STUDENT_SELECT_SUBJECT',
  STUDENT_SELECT_ASSIGNMENT: 'STUDENT_SELECT_ASSIGNMENT',
  STUDENT_SET_ASSIGNMENT_CARD_LIST: 'STUDENT_SET_ASSIGNMENT_CARD_LIST',
}

export const setDateForStudent = () => {
  return {
    type: actionTypes.STUDENT_SET_DATE
  }
}


export const selectSideItemForStudent = (item) => {
  return {
    type: actionTypes.STUDENT_SELECT_SIDE_ITEM,
    item
  }
}

export const selectDateForStudent = (date) => {
  return {
    type: actionTypes.STUDENT_SELECT_DATE,
    date
  }
}

export const selectAssignmentsForStudent = (assignment) => {
  return {
    type: actionTypes.STUDENT_SELECT_ASSIGNMENT,
    assignment
  }
}

export const setAssignmentsCardListForStudent = (assignments) => {
  return {
    type: actionTypes.STUDENT_SET_ASSIGNMENT_CARD_LIST,
    assignments
  }
}