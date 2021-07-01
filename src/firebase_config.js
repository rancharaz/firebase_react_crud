import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB0uYAjukCagA4EwLoeDIbAgYRGSZx3pJk",
    authDomain: "todoapp-fc356.firebaseapp.com",
    projectId: "todoapp-fc356",
    storageBucket: "todoapp-fc356.appspot.com",
    messagingSenderId: "1097124080667",
    appId: "1:1097124080667:web:929305ede4100d8485dcbe"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };