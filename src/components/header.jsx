import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom'
import * as routes from '../constants/routes.jsx';
import AuthUserContext from './authusercontext.jsx';
import Logo from '../assets/images/Crowdsurfer_Logo.jpg';
import SignInOutButton from './signinoutbutton.jsx';

class Header extends Component {
  render() {
    return (
      <div className="topSection">
        <header className="App-header">
          <Link id="navHomeLogo" to={routes.HOME}                                   className="App-header-nav-link" >
          <img src={Logo} className="App-logo" alt="logo" />
          </Link>
          <span className="App-Header-Right">
            <SignInOutButton className="App-Header-Button" />
          </span>
          <div className="Nav-Bar">
            <NavLink exact id="navHome" to={routes.HOME}
              className="App-header-nav-link"
              activeClassName="App-header-nav-link-active">Home
            </NavLink>
            <AuthUserContext.Consumer>
              {authUser => authUser
                ? <NavLink exact id="navPortal" to={routes.PORTAL}
                  className="App-header-nav-link"
                  activeClassName="App-header-nav-link-active">Portal
                </NavLink>
                : ''
              }
            </AuthUserContext.Consumer>
            <AuthUserContext.Consumer>
              {authUser => authUser
                ? <NavLink exact id="navAccount" to={routes.ACCOUNT}
                  className="App-header-nav-link"
                  activeClassName="App-header-nav-link-active">My Account
                </NavLink>
                : ''
              }
            </AuthUserContext.Consumer>
            <NavLink id="navAbout" to={routes.ABOUT}
              className="App-header-nav-link"
              activeClassName="App-header-nav-link-active">About
            </NavLink>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
