import { combineReducers } from 'redux';
import admin from './admin'
import student from './student';

const reducers = combineReducers({
  student, admin
});

export default reducers;