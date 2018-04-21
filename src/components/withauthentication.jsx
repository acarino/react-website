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
        console.log("auth listener",authUser);

        if(!!authUser)
        {
          console.log("trying for auth",authUser.uid);
          db.GetUsersRole(authUser.uid).then(snapshot =>
            {
              console.log("the snap!",snapshot.val());
              this.setState(() => ({ isAdmin: snapshot.val().admin }))
            }
            //console.log('lets see:',snapshot.val().admin)
          ).then(this.setState(() => ({ authUser }))
        );

        }
        else {
          console.log("no auth",authUser);
          return this.setState(() => ({ authUser: null }));
        }
      });
    }

    componentWillUnmount() {
      this.fireBaseListener && this.fireBaseListener();
      this.authListener = undefined;
}

    render() {
      const { authUser } = this.state;
      {console.log('aaaaa',authUser)}
      {console.log('bbbb',firebase.auth.currentUser)}
      {console.log('my state',this.state)}
      return (
        <AuthUserContext.Provider value={this.state}>
          <Component authUser={authUser} />
        </AuthUserContext.Provider>
      );
    }
  }

export default withAuthentication;
