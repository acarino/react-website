import React, {Component} from 'react'
import * as routes from '../constants/routes.jsx';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

class SignInOutButton extends Component{
  constructor(props){
    super(props)
    console.log("am i logged in? ",this.props.authUser)
  }

 render() {
   return (
      <span>
        {this.props.authUser
          ? <SOButton />
          : <SIButton />
         }
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
