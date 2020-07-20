import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCrFfo-cCo-T2szrndeOHAQ6ntQQ3NetnY",
  authDomain: "birthday-940a6.firebaseapp.com",
  databaseURL: "https://birthday-940a6.firebaseio.com",
  projectId: "birthday-940a6",
  storageBucket: "birthday-940a6.appspot.com",
  messagingSenderId: "590167859296",
  appId: "1:590167859296:web:95a91a33ad2e5b3623a305",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;
