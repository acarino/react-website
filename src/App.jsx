import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Signin from './pages/signin.jsx'

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/index.html" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/signin" component={Signin}/>
    </div>
  </Router>

export default App
