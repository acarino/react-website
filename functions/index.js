const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', "*")
  response.set('Access-Control-Allow-Methods', 'GET, POST')
  response.set('Access-Control-Allow-Headers', "content-type")

  console.log("got a request and logging it")

  const requesttext = request.body.data;
   if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
     console.log('Found Auth header');
     const idToken = request.headers.authorization.split('Bearer ')[1];
  }
  else {
    console.log('no auth header found');

    idToken = null; //request.cookies.__session;
  }
  if(idToken !== null)
  {
    admin.auth().verifyIdToken(idToken).then((decodedIdToken) => {
    console.log('ID Token correctly decoded', decodedIdToken);
    request.user = decodedIdToken;
    return next();
    }).catch((error) => {
      console.error('Error while verifying Firebase ID token:', error);
    //request.status(403).send('Unauthorized');
    });
  }





  console.log("here is the text: "+requesttext)

  const responsData =  {"data":{"myData":"Hello finally from Firebase jason!"}}

  response.send(responsData);

 });

 exports.helloWorld1 = functions.https.onRequest((request, response) => {
   response.set('Access-Control-Allow-Origin', "*")
   response.set('Access-Control-Allow-Methods', 'GET, POST')
   response.set('Access-Control-Allow-Headers', "content-type")
   console.log("got a request and logging it")
   const requesttext = request.text();
   console.log("here is the text: "+requesttext)
   const responsData =  {"data":{"myData":"Hello1 finally from Firebase jason!"}}
     response.send(responsData);
 });

 exports.helloWorld2 = functions.https.onRequest((request, response) => {
   response.set('Access-Control-Allow-Origin', "*")
   response.set('Access-Control-Allow-Methods', 'GET, POST')
   response.set('Access-Control-Allow-Headers', "content-type")
   const responsData =  {"data":{"myData":"Hello2 finally from Firebase jason!"}}
     response.send(responsData);
 });

 exports.helloWorld3 = functions.https.onRequest((request, response) => {
   response.set('Access-Control-Allow-Origin', "*")
   response.set('Access-Control-Allow-Methods', 'GET, POST')
   response.set('Access-Control-Allow-Headers', "content-type")
   const responsData =  {"data":{"myData":"Hello3 finally from Firebase jason!"}}
     response.send(responsData);
 });
