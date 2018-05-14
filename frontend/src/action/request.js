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
}

export const setSubject = async (token, isAdmin) => {
  return async (dispatch, getState) => {
    let defaultValue =  [{ id:'0', name: '소프트웨어 공학' }];
    let response = await axios.get(API_SERVER_DOMAIN + '/subject', { }, {
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
    let response = await axios.get(API_SERVER_DOMAIN + '/assignment',requestData, {
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

export const createAssignment = async (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
    if(isAdmin) {
      let response = await axios.post(API_SERVER_DOMAIN + '/assignment',requestData, {
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

export const createSubject = async (requestData, token, isAdmin) => {
  return async (dispatch, getState) => {
    if(isAdmin) {
      let response = await axios.post(API_SERVER_DOMAIN + '/subject',requestData, {
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