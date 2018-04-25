export const actionTypes = {
  ADMIN_CREATE_ASSIGNMENT: 'ADMIN_CREATE_ASSIGNMENT',
  ADMIN_SELECT_SUBJECT: 'ADMIN_SELECT_SUBJECT',
  ADMIN_SELECT_DATE: 'ADMIN_SELECT_DATE',
  ADMIN_SELECT_ASSIGNMENT: 'ADMIN_SELECT_ASSIGNMENT',
  STUDENT_SELECT_SUBJECT: 'STUDENT_SELECT_SUBJECT',
  STUDENT_SELECT_DATE: 'STUDENT_SELECT_DATE',
  STUDENT_SELECT_ASSIGNMENT: 'STUDENT_SELECT_ASSIGNMENT',
  STUDENT_SET_ASSIGNMENTS: 'STUDENT_SET_ASSIGNMENTS',
  STUDENT_SET_ASSIGNMENT_CARD_LIST: 'STUDENT_SET_ASSIGNMENT_CARD_LIST',
}

export const selectSubjectByAdmin = (subject) => {
  return {
    type: actionTypes.ADMIN_SELECT_SUBJECT,
    subject: subject
  }
}

export const selectAssignmentsByAdmin = (assignment) => {
  return {
    type: actionTypes.ADMIN_SELECT_ASSIGNMENT,
    assignment: assignment
  }
}

export const selectSubjectByStudent = (subject) => {
  return {
    type: actionTypes.STUDENT_SELECT_SUBJECT,
    subject: subject
  }
}

export const selectDateByStudent = (date) => {
  return {
    type: actionTypes.STUDENT_SELECT_DATE,
    date: date
  }
}

export const selectAssignmentsByStudent = (assignment) => {
  return {
    type: actionTypes.STUDENT_SELECT_ASSIGNMENT,
    assignment: assignment
  }
}

export const setAssignmentsByStudent = (assignments) => {
  return {
    type: actionTypes.STUDENT_SET_ASSIGNMENTS,
    assignments: assignments
  }
}


export const setAssignmentsCardListByStudent = (assignments) => {
  return {
    type: actionTypes.STUDENT_SET_ASSIGNMENT_CARD_LIST,
    assignments: assignments
  }
}
