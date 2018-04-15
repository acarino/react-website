import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import * as routes from '../constants/routes.jsx';

const Home = () =>

  <div className="App">
  <Header homeClass="App-header-nav-link-active" aboutClass="App-header-nav-link" signinClass="App-header-nav-link" homeURL={routes.STOP} aboutURL={routes.ABOUT} signinURL={routes.SIGN_IN} />
  <h1 className="page-title">Welcome to CrowdSurfer!</h1>
  <div className="page-contents-wrapper"> &nbsp;
  </div>
  <Footer />
  </div>

export default Home
