export const actionTypes = {
  ADMIN_SET_DATE: 'ADMIN_SET_DATE',
  ADMIN_SELECT_DATE: 'ADMIN_SELECT_DATE',
  ADMIN_SELECT_SUBJECT: 'ADMIN_SELECT_SUBJECT',
  ADMIN_SELECT_ASSIGNMENT: 'ADMIN_SELECT_ASSIGNMENT',

  STUDENT_SET_DATE: 'STUDENTS_SET_DATE',
  STUDENT_SELECT_DATE: 'STUDENT_SELECT_DATE',
  STUDENT_SELECT_SUBJECT: 'STUDENT_SELECT_SUBJECT',
  STUDENT_SELECT_ASSIGNMENT: 'STUDENT_SELECT_ASSIGNMENT',
  STUDENT_SET_ASSIGNMENT_CARD_LIST: 'STUDENT_SET_ASSIGNMENT_CARD_LIST',

  STUDENT_GET_SUBJECT_REQUEST_SUCCEEDED: 'STUDENT_GET_SUBJECT_REQUEST_SUCCEEDED',
  STUDENT_GET_SUBJECT_REQUEST_FAILED: 'STUDENT_GET_SUBJECT_REQUEST_FAILED',
  STUDENT_GET_ASSIGNMENT_REQUEST_SUCCEEDED: 'STUDENT_GET_ASSIGNMENT_REQUEST_SUCCEEDED',
  STUDENT_GET_ASSIGNMENT_REQUEST_FAILED: 'STUDENT_GET_ASSIGNMENT_REQUEST_FAILED',

  ADMIN_GET_SUBJECT_REQUEST_SUCCEEDED: 'ADMIN_GET_SUBJECT_REQUEST_SUCCEEDED',
  ADMIN_GET_SUBJECT_REQUEST_FAILED: 'ADMIN_GET_SUBJECT_REQUEST_FAILED',
  ADMIN_GET_ASSIGNMENT_REQUEST_SUCCEEDED: 'ADMIN_GET_ASSIGNMENT_REQUEST_SUCCEEDED',
  ADMIN_GET_ASSIGNMENT_REQUEST_FAILED: 'ADMIN_GET_ASSIGNMENT_REQUEST_FAILED',
}

export const setDateByAdmin = () => {
  return {
    type: actionTypes.ADMIN_SET_DATE
  }
}

export const selectSubjectByAdmin = (subject) => {
  return {
    type: actionTypes.ADMIN_SELECT_SUBJECT,
    subject: subject
  }
}

export const selectDateByAdmin = (date) => {
  return {
    type: actionTypes.ADMIN_SELECT_DATE,
    date: date
  }
}

export const selectAssignmentsByAdmin = (assignment) => {
  return {
    type: actionTypes.ADMIN_SELECT_ASSIGNMENT,
    assignment: assignment
  }
}

export const setDateByStudent = () => {
  return {
    type: actionTypes.STUDENT_SET_DATE
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

export const setAssignmentsCardListByStudent = (assignments) => {
  return {
    type: actionTypes.STUDENT_SET_ASSIGNMENT_CARD_LIST,
    assignments: assignments
  }
}