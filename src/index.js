import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, DefaultLayout } from './container/index';
import { AssignmentProvider } from './context/AssignmentProvider';
import './index.css';

ReactDOM.render(
  <AssignmentProvider>
    <Router history={browserHistory}>
      <Route path='/' component={DefaultLayout} >
        <IndexRoute component={Main}/>
      </Route>
    </Router>
  </AssignmentProvider>
, document.getElementById('root'));
