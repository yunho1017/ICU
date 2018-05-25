//서버 통신 관련 action, action 생성자
import { API_SERVER_DOMAIN } from '../config';
import axios from 'axios';

export const actionTypes = {
  ADMIN_SET_SUBJECT: 'ADMIN_SET_SUBJECT',
  ADMIN_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
  ADMIN_CREATE_ASSIGNMENT: 'ADMIN_CREATE_ASSIGNMENT',
  ADMIN_CREATE_SUBJECT: 'ADMIN_CREATE_SUBJECT',
  STUDENT_SELECT_SIDE_ITEM: 'STUDENT_SELECT_SIDE_ITEM',
  STUDENT_SET_ASSIGNMENT: 'ADMIN_SET_ASSIGNMENT',
  STUDENT_SET_SUBJECT: 'STUDENT_SET_SUBJECT',
}

export const setSubject = (token, isAdmin) => {
  return async (dispatch, getState) => {
    let action = {};
    let defaultValue =  [{ id:'0', name: '기본 값이에용' }];
    let response;
    
    if(isAdmin) action.type = actionTypes.ADMIN_SET_SUBJECT;
    else action.type = actionTypes.STUDENT_SET_SUBJECT;

    response = await axios({
      method: 'GET',
      url: API_SERVER_DOMAIN + '/subject',
      headers: {
        authorization: token
      }
    });
    
    if(response.status === 200) {
      action = { ...action,
        subjects: response.data.subjects
      };
    } else {
      action = { ...action,
        subjects: defaultValue
      };
    }
    dispatch(action);
  }
}

export const setAssignment = (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
    let action = {};
    let response;
    
    if(isAdmin) action.type = actionTypes.ADMIN_SET_ASSIGNMENT;
    else action.type = actionTypes.STUDENT_SET_ASSIGNMENT;

    response = await axios({
      method: 'GET',
      url: API_SERVER_DOMAIN + '/assignment',
      data: requestData,
      headers: {
        authorization: token
      }
    });

    if(response.status === 200) {
      action = { ...action,
        assignments: response.data.assignments
      }
    } else {
      action = { ...action,
        assignments: []
      };
    }

    dispatch(action);
  }
}

export const createAssignment = (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
    if(isAdmin) {
      let response = await axios({
        method: 'POST',
        url: API_SERVER_DOMAIN + '/assignment',
        data: requestData,
        headers: {
          authorization: token
        }
      });

      if(response.status === 200) {
         dispatch({ type: actionTypes.ADMIN_CREATE_ASSIGNMENT, assignments: response.data});
      }
    }
  }
}

export const createSubject = (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
    if(isAdmin) {
      let response = await axios({
        method: 'POST',
        url: API_SERVER_DOMAIN + '/subject',
        data: requestData,
        headers: {
          authorization: token
        }
      });

      if(response.status === 200) {
         dispatch({ type: actionTypes.ADMIN_CREATE_SUBJECT, assignments: response.data});
      }
    }
  }
}