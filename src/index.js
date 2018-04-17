import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, DefaultLayout } from './container/index';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={DefaultLayout} >
      <IndexRoute component={Main}/>
    </Route>
  </Router>
, document.getElementById('root'));
