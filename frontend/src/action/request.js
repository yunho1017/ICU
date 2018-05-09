//서버 통신 관련 action, action 생성자
export const actionTypes = {
  ADMIN_SET_SUBJECT: 'ADMIN_SET_SUBJECT',
  ADMIN_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
  STUDENT_SELECT_SIDE_ITEM: 'STUDENT_SELECT_SIDE_ITEM',
  STUDENT_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
}

export const setSubject = async (token, isAdmin) => {
  return async (dispatch, getState) => {
    let defaultValue =  [{ id:'0', name: '소프트웨어 공학' }];
    let response = await axios.get('/subject', { }, {
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
}

export const setAssignment = async (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
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
    else dispatch({ type: actionTypes.STUDENT_SET_ASSIGNMENT, assignments: []});
  }
}