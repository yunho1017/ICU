import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducer/index';
import thunk from 'redux-thunk';

function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk))
  )
}

export const store = configureStore();

// export const dispatch = (action)=>{
//   store.dispatch(action);
// }