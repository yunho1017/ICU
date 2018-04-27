import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { Main, AdminMain, DefaultLayout, Signin, LandingPage } from './container/index';
import IndexProvider from './IndexProvider';
import './index.css';

ReactDOM.render(
  <IndexProvider>
    <Router history={browserHistory}>
      <Route path='/index' component={LandingPage}/>
      <Route path='/signin' component={Signin}/>
      {/* <Route path='/signup' component={Signup}/> */}
      <Route path='/' component={DefaultLayout} >
        <IndexRoute component={Main}/>
        <Route path='/admin' component={AdminMain}/>
      </Route>
    </Router>
  </IndexProvider>
, document.getElementById('root'));
