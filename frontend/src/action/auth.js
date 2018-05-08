import axios from 'axios';

export const actionTypes = {
  SIGNIN_SUCCEEDED: 'SIGNIN_SUCCEEDED',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
}

export const signup = async (requestData, isAdmin) => {
  let response;

  if(isAdmin) response = await axios.post('/auth/admin/signup',requestData);
  else response = await axios.post('/auth/signup',requestData);

  return response.status;
}

export const signin = (requestData, isAdmin) => {
  return async (dispatch, getState) => {
    let response;

    if(isAdmin) response = await axios.post('/auth/admin/signin',requestData);
    else response = await axios.post('/auth/signin',requestData);

    if(response.status === 200) {
      const data = {
        token: response.data.token,
        refreshToken: response.data.refreshToken,
        isAdmin: isAdmin
      };
      
      dispatch({ type: actionTypes.USER_SIGNIN_SUCCEEDED, data});
    }

    dispatch({ type: actionTypes.USER_SIGNIN_FAILED });
  }
}