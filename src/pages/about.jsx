// src/pages/Books.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header.jsx'

const About = () =>
  <div className="App">
  <Header homeClass="App-header-nav-link" aboutClass="App-header-nav-link-active" homeURL="/" aboutURL="#!"/>
<h1 className="page-title">About CrowdSurfer!</h1>
  </div>

export default About
