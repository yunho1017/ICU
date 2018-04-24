export const actionTypes = {
  CREATE_ASSIGNMENT: 'CREATE_ASSIGNMENT',
  SELECT_SUBJECT: 'SELECT_SUBJECT',
  SELECT_DATE: 'SELECT_DATE',
  SELECT_ASSIGNMENT_CARD: 'SELECT_ASSIGNMENT_CARD',
  SET_ASSIGNMENTS: 'SET_ASSIGNMENTS',
  SET_ASSIGNMENT_CARD_LIST: 'SET_ASSIGNMENT_CARD_LIST',
}

export const selectSubject = (subject) => {
  return {
    type: actionTypes.SELECT_SUBJECT,
    subject: subject
  }
}

export const selectDate = (date) => {
  return {
    type: actionTypes.SELECT_DATE,
    date: date
  }
}

export const setAssignments = (assignments) => {
  return {
    type: actionTypes.SET_ASSIGNMENTS,
    assignments: assignments
  }
}

export const setAssignmentsCardList = (assignments) => {
  return {
    type: actionTypes.SET_ASSIGNMENT_CARD_LIST,
    assignments: assignments
  }
}

export const selectAssignmentsCard = (assignment) => {
  return {
    type: actionTypes.SELECT_ASSIGNMENT_CARD,
    assignment: assignment
  }
}