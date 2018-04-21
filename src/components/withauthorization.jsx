import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './authusercontext.jsx';
import { firebase } from '../firebase';
import * as routes from '../constants/routes.jsx';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    constructor(props){
      super(props);
      this.firstbaseAuthListener = null;
    }
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        console.log("this is the authUser in withAuthorization", authCondition);
        if (!!authCondition) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    componentWillUnmount() {
      this.fireBaseListener && this.fireBaseListener();
      this.authListener = undefined;
}

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;
