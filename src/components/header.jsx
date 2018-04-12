
import React, { Component } from 'react';
import logo from '../assets/images/Crowdsurfer_Logo.jpg';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <br />
  <br />
  <a href={this.props.homeURL} className={this.props.homeClass}>Home</a> &nbsp; &nbsp;
  <a href={this.props.aboutURL} className={this.props.aboutClass}>About</a>
</header>

    );
  }
}

export default Header;
