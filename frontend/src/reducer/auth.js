import { actionTypes } from '../action/auth';
import { authDefaultState } from '../config';

const auth = (state = authDefaultState, action) => {
  switch(action.type) { 
    case actionTypes.SIGNIN_SUCCEEDED: 
      return { ...state,
        token: action.data.token,
        refreshToken: action.data.refreshToken,
        isAdmin: action.data.isAdmin,
        isSucceeded: true
      }
    
    case actionTypes.SIGNIN_FAILED: 
      return { ...state,
        isSucceeded: false
      }
    default : return state;
  }
}

export default auth;