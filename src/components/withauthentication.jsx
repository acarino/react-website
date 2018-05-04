import React from 'react';

import AuthUserContext from '../components/authusercontext.jsx';
import { firebase, db } from '../firebase';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.firebaseListener = null;

      this.state = {
        authUser: null,
        isAdmin:false,
      };
    }

    componentDidMount() {
      this.firebaseListener = firebase.auth.onAuthStateChanged(authUser => {
        const self = this;
        console.log("auth listener",authUser);

        if(!!authUser)
        {
          console.log("trying for auth",authUser.uid);
          db.GetUsersRole(authUser.uid).then(snapshot =>
            {
              snapshot.val() ?
                self.setState(() => ({ isAdmin: snapshot.val().admin }))
                :
                self.setState(() => ({ isAdmin: false }))
            }
            //console.log('lets see:',snapshot.val().admin)
          ).then(self.setState(() => ({ authUser }))
        );

        }
        else {
          return self.setState(() => ({ authUser: null }));
        }
      });
    }

    componentWillUnmount() {
      this.fireBaseListener && this.fireBaseListener();
      this.authListener = undefined;
}

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={this.state}>
          <Component authUser={authUser} />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;
