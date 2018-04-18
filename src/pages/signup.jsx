import React, { Component }  from 'react'
import * as routes from '../constants/routes.jsx';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

const SignUp = ({history}) =>
<div className="App-Page">
  <h1 className="page-title">Sign Up CrowdSurfer!</h1>
  <div className="page-contents-wrapper">
    <div>
      <SignUpForm history={history} />
    </div>
  </div>
</div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

  class SignUpForm extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
      const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
    }

    render() {
      const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

      const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

      return (
        <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <br/><br/>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <br/><br/>
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <br/><br/>
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <br/><br/>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
        </form>
      );
    }
  }

  const SignUpLink = () =>
  <p className="App-Text">
    Don't have an account? &nbsp;
    <Link to={routes.SIGN_UP} className="App-Link" >Sign Up</Link>
  </p>

export default withRouter(SignUp);

export {
  SignUpForm,
  SignUpLink,
};
