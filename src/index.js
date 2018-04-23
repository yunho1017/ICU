import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, AdminMain, DefaultLayout, Signin } from './container/index';
import { MainProvider } from './context/MainProvider';
import './index.css';

ReactDOM.render(
  <MainProvider>
    <Router history={browserHistory}>
      <Route path='/' component={DefaultLayout} >
        <IndexRoute component={Main}/>
        <Route path='/admin' component={AdminMain}/>
      </Route>
      <Route path='/signin' component={Signin}/>
    </Router>
  </MainProvider>
, document.getElementById('root'));
