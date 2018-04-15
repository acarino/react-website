import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import * as firebaseui from 'firebaseui'
import * as routes from '../constants/routes.jsx';

const ChangePassword = () =>

  <div className="App">
  <Header homeClass="App-header-nav-link" aboutClass="App-header-nav-link" signinClass="App-header-nav-link-active" homeURL={routes.HOME} aboutURL={routes.ABOUT} signinURL={routes.STOP} />
  <h1 className="page-title">Sign in to CrowdSurfer!</h1>
  <div className="page-contents-wrapper"> &nbsp;
  </div>
  <Footer />
  </div>

export default ChangePassword
