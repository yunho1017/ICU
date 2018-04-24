import { createStore } from 'redux';
import reducers from '../reducer/index';

export const store = createStore(
  reducers
);

export const dispatch = (action)=>{
  store.dispatch(action);
}