import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom';
import AuthUserContext from './authusercontext.jsx';
import { auth } from '../firebase';
import * as routes from '../constants/routes.jsx';

class SignInOutButton extends Component{

 render() {
   return (
      <span>
        <AuthUserContext.Consumer>
          {authUser => !!Object.values(authUser)[0]
            ? <SOButton />
            : <SIButton />
          }
        </AuthUserContext.Consumer>
      </span>
    );
  }
}

const SIButton = ({history}) =>
<Link id="navSignIn" to={routes.SIGN_IN}
  className="Sign-In-Button-Link">
  <div className="Sign-In-Button-Div">Sign In</div>
</Link>


const SOButton = ({history}) =>
<Link id="navSignIn" to={routes.HOME}
  className="Sign-Out-Button-Link"
  onClick={auth.doSignOut} >
  <div className="Sign-Out-Button-Div">Sign Out</div>
</Link>


export default withRouter(SignInOutButton);
