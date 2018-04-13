// src/pages/Home.jsx
import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const Home = () =>

  <div className="App">
  <Header homeClass="App-header-nav-link" aboutClass="App-header-nav-link" homeURL="/" aboutURL="/about" signinClass="App-header-nav-link-active" signinURL="#!" />
  <h1 className="page-title">Sign in to CrowdSurfer!</h1>
  <div className="page-contents-wrapper"> &nbsp;
  </div>
  <Footer />
  </div>

export default Home
