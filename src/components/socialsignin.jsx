import React, {Component} from 'react'
import {facebookProvider,googleProvider,twitterProvider,githubProvider,providerAuth } from '../firebase';
import * as routes from '../constants/routes.jsx';
import { withRouter } from 'react-router-dom';
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

}
  componentDidMount() {

   }

   socialLogin = (org) => {
     const self = this;
     const {
       history,
     } = this.props;
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
     }
     //provider.addScope('email');
     provider.setCustomParameters({'display': 'popup'});
     providerAuth.signInWithPopup(provider).then(function(result) {
     console.log("social callback:",result)
     // This gives you the Access Token from the social provider. You can use it to access the Facebook API.
     var token = result.credential.accessToken;
     console.log("social response data:",result)

     const signupData = {
       "signup": {
         "uid": result.user.uid,
         "email": result.user.email,
         "name": result.user.displayName,
         "FBtoken": result.credential.accessToken
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

     }).catch(function(error) {
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
 }

  render(){
    const {
      error,
    } = this.state;
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
