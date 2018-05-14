import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, AdminMain, AdminSignin, DefaultLayout, Signin, LandingPage, AdminSignup } from './container/index';
import IndexProvider from './IndexProvider';
import './index.css';

ReactDOM.render(
  <IndexProvider>
    <Router>
      <Switch>
        <Route path='/index' component={LandingPage} exact/>
        <Route path='/signin' component={Signin} exact/>
        <Route path='/signin/admin' component={AdminSignin} exact/>
        <Route path='/signup/admin' component={AdminSignup} exact/>
        <Route render={() => 
          <React.Fragment>
            <DefaultLayout/>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/admin" component={AdminMain} exact />
            </Switch>
          </React.Fragment> 
        } />
      </Switch>
    </Router>
  </IndexProvider>
, document.getElementById('root'));
