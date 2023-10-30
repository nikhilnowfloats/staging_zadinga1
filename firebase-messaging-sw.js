importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyBewnCZ-9S9fNmF0WiTVN2BoTuT3IwE2uk",
    authDomain: "zadinga-dev.firebaseapp.com",
    databaseURL: "https://zadinga-dev.firebaseio.com",
    projectId: "zadinga-dev",
    storageBucket: "zadinga-dev.appspot.com",
    messagingSenderId: "1016845239760",
    appId: "1:1016845239760:web:d778081e790b6c7b8fa5d5",
    measurementId: "G-L0ZHLESS6Z"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  // messaging.onBackgroundMessage(function(payload) {
  //   console.log('Received background message ', payload);

  //   const notificationTitle = payload.notification.title;
  //   const notificationOptions = {
  //     body: payload.notification.body,
  //   };

  //   self.registration.showNotification(notificationTitle,
  //     notificationOptions);
  // });