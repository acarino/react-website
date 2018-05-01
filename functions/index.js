const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({origin: true});
const rp = require('request-promise');
const language = require('@google-cloud/language');
const app = express();

// Instantiates a client
const client = new language.LanguageServiceClient();


const setCors = (res) => {
  if(res)
  {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    res.set('Access-Control-Allow-Headers', "content-type")
  }
    return res;
  }

 exports.helloWorld = functions.https.onRequest((request, response) => {
   setCors(response);

  console.log("got a request and logging it")

  const requesttext = request.body.data;

  console.log("here is the text: "+requesttext)

  const nlpUrl = "https://language.googleapis.com/v1/documents:annotateText?fields=categories%2CdocumentSentiment%2Centities%2Clanguage%2Csentences%2Ctokens&key=" + requesttext;

  rp({
    method: 'GET',
    uri: nlpUrl,
    body: {
 "document": {
  "content": "tacos",
  "type": "PLAIN_TEXT"
 },
 "features": {
  "extractDocumentSentiment": true,
  "classifyText": false,
  "extractEntities": true,
  "extractSyntax": false,
  "extractEntitySentiment": true
 }
},
    json: true,
  }).then(response => {
    console.log("response from nlp: ",response.json());
    return response.json();
  })
  .then(myJson => {
    console.log("second then from nlp:",myJson);
    return myJson;
  }).catch(error => console.error(error));


  const responsData =  {"data":{"myData":"Hello finally from Firebase jason!"}}

  response.send(responsData);

 });


 //*********************************************************//

 exports.helloWorld1 = functions.https.onRequest((request, response) => {
   setCors(response);
   console.log("got a request and logging it")
   const requesttext = request.body.data;
   console.log("here is the text: "+requesttext)
// The text to analyze
const text = requesttext;
let nlpReturnText = "";

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    return sentiment;
  }).then(sentimentResponse => {
    nlpReturnText = `Sentiment score: ${sentimentResponse.score}` +` Sentiment magnitude: ${sentimentResponse.magnitude}`;
    const responsData =  {"data":{"myData":nlpReturnText}}
    response.send(responsData);
    return "";
  }).catch(err => {
    console.error('ERROR:', err);
    const responsErrorData =  {"data":{"myData":"there was an error.."}}
    response.send(responsErrorData);
  });




 });



 //**************************************//

 exports.helloWorld2 = functions.https.onRequest((request, response) => {
   setCors(response);
   admin.firestore().doc("surveys/pizza_toppings").get().then(resp => {
     console.log("got the survey")
     return "";
   }).catch(error =>{
     console.log("failed to get the survey")
     return "";
   })

   const responsData =  {"data":{"myData":"Hello2 finally from Firebase jason!"}}
     response.send(responsData);
 });

 exports.helloWorld3 = functions.https.onRequest((request, response) => {
   setCors(response);

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

   const responsData =  {"data":{"myData":"Hello3 finally from Firebase jason!"}}
     response.send(responsData);
 });



exports.callNLP = functions.https.onRequest((request, response) => {
   setCors(response);
   console.log("got a request and logging it")
   const requesttext = request.body.data;
   console.log("here is the text: "+requesttext)
// The text to analyze
const text = requesttext;
let nlpReturnText = "";

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeEntitySentiment({document: document})
  .then(results => {
    const theResults = results[0];
    const sentiment = theResults.documentSentiment;

    console.log(`Text: ${text}`);
    console.log("sentiment:",sentiment);
    console.log("results: ",theResults);
    //console.log(`Sentiment score: ${sentiment.score}`);
    //console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    const responsData =  {"data":theResults}
    console.log("response Data: ", responsData);
    response.send(responsData);
    return responsData;
  }).catch(err => {
    console.error('ERROR:', err);
    const responsErrorData =  {"data":{"myData":"there was an error.."}}
    response.send(responsErrorData);
  });
});
