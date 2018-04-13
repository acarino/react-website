// src/pages/Books.jsx
import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

const About = () =>
  <div className="App">
  <Header homeClass="App-header-nav-link" aboutClass="App-header-nav-link-active" signinClass="App-header-nav-link" homeURL="/" aboutURL="#!" signinURL="signin" />
<h1 className="page-title">About CrowdSurfer!</h1>
<div className="page-contents-wrapper">&nbsp;
</div>
<Footer />
  </div>

export default About
