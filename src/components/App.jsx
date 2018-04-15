import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import '../assets/styles/App.css';
import * as routes from '../constants/routes.jsx';

import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import Signin from '../pages/signin.jsx'
import Portal from '../pages/portal.jsx'
import Account from '../pages/account.jsx'

const App = () =>
  <Router>
    <div>
      <Route exact path={routes.HOME} component={Home}/>
      <Route exact path={routes.EXPLICIT_HOME} component={Home}/>
      <Route path={routes.ABOUT} component={About}/>
      <Route path={routes.SIGN_IN} component={Signin}/>
      <Route path={routes.PORTAL} component={Signin}/>
      <Route path={routes.SIGN_UP} component={Signin}/>
      <Route path={routes.PASSWORD_FORGOT} component={Signin}/>
      <Route path={routes.ACCOUNT} component={Account}/>
    </div>
  </Router>

export default App
