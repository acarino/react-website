const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', "*")
  response.set('Access-Control-Allow-Methods', 'GET, POST')
  response.set('Access-Control-Allow-Headers', "content-type")

const responsData =  {"data":{"myData":"Hello finally from Firebase jason!"}}
  response.send(responsData);
 });

 exports.helloWorld1 = functions.https.onRequest((request, response) => {
   response.set('Access-Control-Allow-Origin', "*")
   response.set('Access-Control-Allow-Methods', 'GET, POST')
   response.set('Access-Control-Allow-Headers', "content-type")
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
