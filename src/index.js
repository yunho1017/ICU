import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { Main, AdminMain, DefaultLayout, Signin, RendingPage } from './container/index';
import IndexProvider from './IndexProvider';
import './index.css';

ReactDOM.render(
  <IndexProvider>
    <Router history={browserHistory}>
      <Route path='/' component={RendingPage}/>
      <Route path='/signin' component={Signin}/>
      {/* <Route path='/signup' component={Signup}/> */}
      <Route path='/' component={DefaultLayout} >
        <Route path='/main'  component={Main}/>
        <Route path='/admin/main' component={AdminMain}/>
      </Route>
    </Router>
  </IndexProvider>
, document.getElementById('root'));
