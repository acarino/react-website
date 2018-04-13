
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/images/Crowdsurfer_Logo.jpg';

class Header extends Component {
  render() {
    return (
<div className="topSection">
<header className="App-header">
  <Link id="navHomeLogo" to={this.props.homeURL} className="App-header-nav-link-active">
    <img src={logo} className="App-logo" alt="logo" />
  </Link>
  <div className="Nav-Bar">
    <Link id="navHome" to={this.props.homeURL} className={this.props.homeClass}>Home</Link> &nbsp; &nbsp; &nbsp; &nbsp;
    <Link id="navAbout" to={this.props.aboutURL} className={this.props.aboutClass}>About</Link> &nbsp; &nbsp; &nbsp; &nbsp;
    <Link id="navSignin" to={this.props.signinURL} className={this.props.signinClass}>Sign In</Link>
  </div>
</header>
</div>
    );
  }
}

export default Header;
