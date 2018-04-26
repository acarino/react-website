import * as firebase from 'firebase';
import '@firebase/functions'

var config = {
  apiKey: "AIzaSyCDWJ8C32UTmCUEA5On9LAc6Q3Q-_UUnms",
  authDomain: "crowdsurfer-2fccd.firebaseapp.com",
  databaseURL: "https://crowdsurfer-2fccd.firebaseio.com",
  projectId: "crowdsurfer-2fccd",
  storageBucket: "crowdsurfer-2fccd.appspot.com",
  messagingSenderId: "558716558956"
};
//initialize default firebase app for auth and db
if(!firebase.apps[0] || firebase.apps[0].name != "[DEFAULT]"){
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

//initialize functions firebase app for unauthenticated functions callFunction
//required unauthed function calls for cross domain access as https options method fails
//due to firebases autherization header conflicting with option rules
const FUNCTIONSAPP = "FUNCTIONSAPP"
var fbFunctions = null;
var functions = null;

if(!firebase.apps[1] || firebase.apps[1].name != FUNCTIONSAPP)
{
  fbFunctions = firebase.initializeApp(config, FUNCTIONSAPP);
  functions = fbFunctions.functions();
}

export {
  db,
  auth,
  functions,
};
