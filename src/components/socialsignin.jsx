import React, {Component} from 'react'
import {auth,facebookProvider,googleProvider,twitterProvider,githubProvider,providerAuth,firebase } from '../firebase';
//import * as routes from '../constants/routes.jsx';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import TwitterLoginButton from 'react-social-login-buttons/lib/buttons/TwitterLoginButton';
import GithubLoginButton from 'react-social-login-buttons/lib/buttons/GithubLoginButton';

const FACEBOOK = "Facebook";
const GOOGLE = "Google";
const TWITTER = "Twitter";
const GITHUB = "Github";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SocialAuth extends Component {
  constructor(props){
    super(props)
    this.state={
      error:null,
  }
  this.firebaseListener = null;
  //this.addUser();

}

componentDidMount() {

  this.firebaseListener = firebase.auth.onAuthStateChanged(authUser => {
  const self = this;
  console.log("auth listener in social",authUser);
    if(!!authUser){
      self.checkNow("ss Mount")
    }
  });
}

componentWillUnmount() {
  this.fireBaseListener && this.fireBaseListener();
  this.authListener = undefined;
}


 checkNow(where)
 {
   console.log("userin  "+where+" : ",auth.doGetCurrentUser());
 }

addUser() {
  //alert("add user")
  const self = this;
  console.log("calling social check aitmoatically");
  providerAuth.getRedirectResult().then(function(result) {
    console.log("after redirect",result);

    //var user = result.user;
    // history.push(routes.PORTAL);

    const signupData = {
      "signup": {
      "uid": result.user.uid,
      "email": result.user.email,
      "name": result.user.displayName,
    }
  }

    if(navigator.serviceWorker.controller){
      console.log("calling post message: ", navigator.serviceWorker.controller);
      navigator.serviceWorker.controller.postMessage(JSON.stringify(signupData));
    }
  }).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    //var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    //var credential = error.credential;
    // ...
    console.log("error after redirect",error);
    self.setState(byPropKey('error', errorMessage));
  });
}


   socialLogin = (org) => {
     //const self = this;
     //const {
      // history,
     //} = this.props;
     console.log("clicked social sign in for: "+ org);
     var provider = null;

     switch(org){
      case FACEBOOK:
        provider = facebookProvider;
        break;
      case GOOGLE:
        provider = googleProvider;
        break;
      case TWITTER:
        provider = twitterProvider;
        break;
      case GITHUB:
        provider = githubProvider;
        break;
      default :
        provider = facebookProvider;
        break;
     }
     providerAuth.signInWithRedirect(provider);
     //provider.addScope('email');
    /*  provider.setCustomParameters({'display': 'page'});
     providerAuth.signInWithPopup(provider).then(function(result) {
     console.log("social response data:",result)
     const signupData = {
       "signup": {
         "uid": result.user.uid,
         "email": result.user.email,
         "name": result.user.displayName,
         "Socialtoken": result.credential.accessToken
       }
     }
     console.log("social login data",signupData);

     if(navigator.serviceWorker.controller){
       console.log("calling post message: ", navigator.serviceWorker.controller);
       navigator.serviceWorker.controller.postMessage(JSON.stringify(signupData));
     }
     else{
       console.log("didnt call post message: ", navigator.serviceWorker.controller);
     }
     //on success, navigate to the portal page
     history.push(routes.PORTAL);

   }).catch((error) => {
       console.log("there was an error with social sign in");
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       console.log("code: "+errorCode+" Error Messge: "+errorMessage+" email: "+email+" credential: "+credential)
       self.setState(byPropKey('error', errorMessage));
     }
   );
   */
 }

  render(){

    return(
<div style={{textalign: 'center'}}>
  <div style={{display:'inline-block', width:'200px'}}>
        <FacebookLoginButton text={FACEBOOK} onClick={() => this.socialLogin(FACEBOOK)} />
        <GoogleLoginButton text={GOOGLE} onClick={() => this.socialLogin(GOOGLE)} />
        <TwitterLoginButton text={TWITTER} onClick={() => this.socialLogin(TWITTER)} />
        <GithubLoginButton text={GITHUB} onClick={() => this.socialLogin(GITHUB)} />
        </div>
        <div className="App-Text-Error">{this.state.error}</div>
</div>
    )
  }
}
export {SocialAuth}
