import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwDjFUMmnFDx-6PAAftnliT390iPwdAGo",
    authDomain: "clone-2b1ea.firebaseapp.com",
    databaseURL: "https://clone-2b1ea.firebaseio.com",
    projectId: "clone-2b1ea",
    storageBucket: "clone-2b1ea.appspot.com",
    messagingSenderId: "150721550874",
    appId: "1:150721550874:web:f8d16c4288362f3c47cfa3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
