import React from 'react';
import AuthUserContext from '../components/authusercontext.jsx';
import ChangePasswordForm from './changepassword.jsx';
import FadeIn from 'react-fade-in';

const Account = () =>

<div className="App-Page">
  <AuthUserContext.Consumer>
    { authUser =>
      <FadeIn>
        <h1 className="page-title">My Account:<br/> {!!Object.values(authUser)[0] ? Object.values(authUser)[0].email : ''}</h1>
        <div className="page-contents-wrapper">
          <br />
          <div className="App-Text">Reset Password</div>
          <br/>
          <ChangePasswordForm />
        </div>
      </FadeIn>
    }
  </AuthUserContext.Consumer>
</div>

export default Account
