import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';
import { PasswordForgotLink } from './forgotpassword.jsx';
//import AuthUserContext from '../components/authusercontext.jsx';
import { SignUpLink } from './signup.jsx';
import { SocialAuth } from '../components/socialsignin.jsx';
//import {Router,Route, Switch, Redirect} from 'react-router-dom'
import { auth } from '../firebase';
import * as routes from '../constants/routes.jsx';
import FadeIn from 'react-fade-in';

const SignIn = ({history}) =>
  <div className="App-Page">
    <FadeIn>
      <h1 className="page-title">Sign into CrowdSurfer With</h1>
      <div className="page-contents-wrapper">
          <div>
              <SocialAuth history={history} />
              <hr style={{width:"50%"}}/>
              <div>Or</div>
              <br />
              <SignInForm history={history} />
              <br/>
              <PasswordForgotLink />
              <SignUpLink />
            </div>
      </div>
    </FadeIn>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const self = this;
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        self.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.PORTAL);
      }).catch(error => {
        self.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
        />
        <br/><br/>
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <br/><br/>
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        { error && <p className="App-Text-Error" >{error.message}</p> }
      </form>
    );
  }
}


export default withRouter(SignIn);

export {
  SignInForm,
}
