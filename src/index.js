import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, AdminMain, DefaultLayout, Signin } from './container/index';
import { AssignmentProvider } from './context/AssignmentProvider';
import { ModalProvider } from './context/ModalProvider';
import './index.css';

ReactDOM.render(
  <AssignmentProvider>
    <ModalProvider>
      <Router history={browserHistory}>
        <Route path='/' component={DefaultLayout} >
          <IndexRoute component={Main}/>
          <Route path='/admin' component={AdminMain}/>
        </Route>
        <Route path='/signin' component={Signin}/>
      </Router>
    </ModalProvider>
  </AssignmentProvider>
, document.getElementById('root'));
