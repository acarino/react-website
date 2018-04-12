// src/pages/Home.jsx
import React from 'react'
import Header from '../components/header.jsx'

const Home = () =>

  <div className="App">
  <Header homeClass="App-header-nav-link-active" aboutClass="App-header-nav-link" homeURL="#!" aboutURL="/about"/>
  <h1 className="page-title">Welcome to CrowdSurfer!</h1>
  </div>

export default Home
