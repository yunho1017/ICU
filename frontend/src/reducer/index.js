import { combineReducers } from 'redux';
import auth from './auth';
import admin from './admin'
import student from './student';

const reducers = combineReducers({
  student, admin, auth
});

export default reducers;