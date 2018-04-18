import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCDWJ8C32UTmCUEA5On9LAc6Q3Q-_UUnms",
  authDomain: "crowdsurfer-2fccd.firebaseapp.com",
  databaseURL: "https://crowdsurfer-2fccd.firebaseio.com",
  projectId: "crowdsurfer-2fccd",
  storageBucket: "crowdsurfer-2fccd.appspot.com",
  messagingSenderId: "558716558956"
};

if(!firebase.apps.length){
  console.log("before firebase.initializeApp firebase");
  firebase.initializeApp(config);
  console.log("after firebase.initializeApp firebase");
}
console.log("initializing firebase auth");
const auth = firebase.auth();
console.log("initialized firebase auth");
export {
  auth,
};
