import React from 'react';
import AuthUserContext from '../components/authusercontext.jsx';
import { firebase, db,push } from '../firebase';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.firebaseListener = null;
      this.pushListener = null;

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
              snapshot.val()
                ? self.setState(() => ({ isAdmin: snapshot.val().admin }))
                : self.setState(() => ({ isAdmin: false }))
            }
            //console.log('lets see:',snapshot.val().admin)
          ).then(self.setState(() => ({ authUser }))
        ).then(() => {
          push.requestPermission()
            .then(() => push.getToken())
            .then((token) => {
              console.log("push token:",token);
            }).catch(e => {
              console.error();
              console.log("error in push reg:",e)
            });
      });

        }
        else {
          return self.setState(() => ({ authUser: null }));
        }
      });

      this.pushListener = push.onTokenRefresh(function () {
        this.push.getToken().then(function (refreshedToken) {
        console.log('Token refreshed.');
        })
        .catch(function (err) {
      console.log('Unable to retrieve refreshed token ', err);
    });
});


    }

    componentWillUnmount() {
      this.firebaseListener = undefined
      this.pushListener = undefined
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
