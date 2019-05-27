import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxyN-NUejzZ9bkNF6jzz2SPrcCFamFtBY",
    authDomain: "squirrel-a8e4b.firebaseapp.com",
    databaseURL: "https://squirrel-a8e4b.firebaseio.com",
    projectId: "squirrel-a8e4b",
    storageBucket: "squirrel-a8e4b.appspot.com",
    messagingSenderId: "516495704170",
    appId: "1:516495704170:web:77795c51d041281c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots : true })

  export default firebase;