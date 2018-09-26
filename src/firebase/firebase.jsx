import firebase from '@firebase/app';
import '@firebase/functions'
import {config} from './firebasekey.jsx'
import '@firebase/auth';
import '@firebase/database';
import '@firebase/messaging';



//initialize default firebase app for auth and db
if(!firebase.apps[0] || firebase.apps[0].name !== "[DEFAULT]"){
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();
const push = firebase.messaging();

//social sign in items
const providerAuth = firebase.auth();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
var googleProvider = new firebase.auth.GoogleAuthProvider();
var twitterProvider = new firebase.auth.TwitterAuthProvider();
var githubProvider = new firebase.auth.GithubAuthProvider();



//initialize functions firebase app for unauthenticated functions callFunction
//required unauthed function calls for cross domain access as https options method fails
//due to firebases autherization header conflicting with option rules
const FUNCTIONSAPP = "FUNCTIONSAPP"
var fbFunctions = null;
var functions = null;

if(!firebase.apps[1] || firebase.apps[1].name !== FUNCTIONSAPP)
{
  fbFunctions = firebase.initializeApp(config, FUNCTIONSAPP);
  functions = fbFunctions.functions();
}

export {
  db,
  auth,
  push,
  functions,
  facebookProvider,
  googleProvider,
  twitterProvider,
  githubProvider,
  providerAuth,
};
