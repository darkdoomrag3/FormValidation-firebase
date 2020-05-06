import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyAw9J9lGACATu_jI9vOPh_bLx4cv8z1g74",
    authDomain: "fromvalidation.firebaseapp.com",
    databaseURL: "https://fromvalidation.firebaseio.com",
    projectId: "fromvalidation",
    storageBucket: "fromvalidation.appspot.com",
    messagingSenderId: "1080885689717",
    appId: "1:1080885689717:web:856b74440d330c9b94a73c",
    measurementId: "G-MC53EGBRQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore()