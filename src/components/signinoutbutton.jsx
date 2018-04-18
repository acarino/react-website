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
<Link id="navSignIn" to={routes.SIGN_IN} className="Sign-In-Button">Sign In</Link>


const SOButton = ({history}) =>

<Link id="navSignIn" to={routes.HOME}
className="Sign-Out-Button"
onClick={auth.doSignOut} >Sign Out</Link>


export default withRouter(SignInOutButton);
