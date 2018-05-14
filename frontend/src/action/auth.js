//사용자 계정 관련 action, action 생성자
import axios from 'axios';
import { API_SERVER_DOMAIN } from '../config';

export const logout = () => {
  localStorage.setItem('token', '');
  localStorage.setItem('refreshToken', '');
  localStorage.setItem('isAdmin', false);
  localStorage.setItem('isLogin', false);
}

export const signup = async (requestData, isAdmin) => {
  let response;

  if(isAdmin) response = await axios.post(API_SERVER_DOMAIN + '/auth/admin/signup',requestData);
  else response = await axios.post(API_SERVER_DOMAIN + '/auth/signup',requestData);

  return response.status;
}

export const signin = async (requestData, isAdmin) => {
    let response;

    if(isAdmin) response = await axios.post(API_SERVER_DOMAIN + '/auth/admin/signin',requestData);
    else response = await axios.post(API_SERVER_DOMAIN + '/auth/signin',requestData);
  
    if(response.status === 200) {
      const data = {
        token: response.data.token,
        refreshToken: response.data.refreshToken,
        isAdmin: isAdmin
      };
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('isAdmin', data.isAdmin);
      localStorage.setItem('isLogin', true);
    }
}