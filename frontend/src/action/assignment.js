export const actionTypes = {
  ADMIN_SET_DATE: 'ADMIN_SET_DATE',
  ADMIN_SELECT_DATE: 'ADMIN_SELECT_DATE',
  ADMIN_SELECT_SUBJECT: 'ADMIN_SELECT_SUBJECT',
  ADMIN_SELECT_ASSIGNMENT: 'ADMIN_SELECT_ASSIGNMENT',

  STUDENT_SET_DATE: 'STUDENTS_SET_DATE',
  STUDENT_SELECT_SUBJECT: 'STUDENT_SELECT_SUBJECT',
  STUDENT_SELECT_ASSIGNMENT: 'STUDENT_SELECT_ASSIGNMENT',
  STUDENT_SET_ASSIGNMENT_CARD_LIST: 'STUDENT_SET_ASSIGNMENT_CARD_LIST',

  ADMIN_SET_SUBJECT: 'ADMIN_SET_SUBJECT',
  ADMIN_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
  STUDENT_SET_SUBJECT: 'ADMIN_SET_SUBJECT',
  STUDENT_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
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

export const setSubject = (token, isAdmin) => {
  let defaultValue =  [{ id:'0', name: '소프트웨어 공학' }];
  let response = await axios.get('/subject',requestData, {
    headers: {
      authorization: token
    }
  });

  if(response.status === 200) {
    if(isAdmin) dispatch({ type: actionTypes.ADMIN_SET_SUBJECT, subjects: response.data});
    else dispatch({ type: actionTypes.STUDENT_SET_SUBJECT, subjects: response.data});
  }

  if(isAdmin) dispatch({ type: actionTypes.ADMIN_SET_SUBJECT, subjects: defaultValue});
  else dispatch({ type: actionTypes.STUDENT_SET_SUBJECT, subjects: defaultValue});
}

export const setAssignment = async (requestData, token, isAdmin) => {
  let response = await axios.get('/assignment',requestData, {
    headers: {
      authorization: token
    }
  });

  if(response.status === 200) {
    if(isAdmin) dispatch({ type: actionTypes.ADMIN_SET_ASSIGNMENT, assignments: response.data});
    else dispatch({ type: actionTypes.STUDENT_SET_ASSIGNMENT, assignments: response.data});
  }

  if(isAdmin) dispatch({ type: actionTypes.ADMIN_SET_ASSIGNMENT, assignments: []});
  else dispatch({ type: actionTypes.STUDENT_SET_ASSIGNMENT, assignment});
}