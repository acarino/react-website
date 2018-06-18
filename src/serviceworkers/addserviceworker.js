import {config} from '../firebase/firebasekey.jsx'
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

self.addEventListener("notificationclick", function(event) {
    console.log('On notification click1: ', event.notification);

    var mymessage = {

    	type: "notification",
    	msg: "received notification from service worker post",
    	title: event.notification.title,
    	body: event.notification.body

    }

    // close the notification
    event.notification.close();

    //To open the app after click notification
    event.waitUntil(
        clients.matchAll({includeUncontrolled: true, type: 'window'})
        .then(function(clientList) {

        	console.log('client list length: '+ clientList.length);

            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];

                console.log(client);

                client.postMessage(mymessage);

                if ("focus" in client) {
                    return client.focus();
                }
            }

            if (clientList.length === 0) {
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            }
        })
    );
});

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

firebase.initializeApp({
  config.messagingSenderId
});

function setListener(){
   clients.matchAll({includeUncontrolled: true, type: 'window'})
  .then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      console.log("in setListener client length: "+clientList.length);
      client.addEventListener('message', function(messageEvent) {
      console.log('in setListener got event in sw:', messageEvent);
      });
    }
  })
}

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
var messaging = firebase.messaging();

// If you would like to customize notifications that are received in the background (Web app is closed or not in browser focus) then you should implement this optional method
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.'

  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('message', function(e) {
  console.log('in e: ', e.data);
  const userData = JSON.parse(e.data);
    if(userData.signup.uid){
      console.log('post message parsed name json: ' + userData.signup.uid);
    }
    if(userData.signup.email){
      console.log('post message parsed email json: ' + userData.signup.email);
    }
    if(userData.signup.name){
      console.log('post message parsed name json: ' + userData.signup.name);
    }
});
