import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, AdminMain, DefaultLayout, Signin, RendingPage } from './container/index';
import IndexProvider from './context/IndexProvider';
import './index.css';

ReactDOM.render(
  <IndexProvider>
    <Router history={browserHistory}>
      <Route path='/' component={RendingPage}/>
      <Route path='/signin' component={Signin}/>
      {/* <Route path='/signup' component={Signup}/> */}
      <Route path='/main' component={DefaultLayout} >
        <IndexRoute component={Main}/>
        <Route path='/main/admin' component={AdminMain}/>
      </Route>
    </Router>
  </IndexProvider>
, document.getElementById('root'));
