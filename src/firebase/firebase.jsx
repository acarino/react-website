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
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();
export {
  db,
  auth,
};
