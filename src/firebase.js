import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQMXKW7b04Y9vl8Pj6iYz8kq89nakg_KQ",
    authDomain: "netflex-clone-91b5f.firebaseapp.com",
    projectId: "netflex-clone-91b5f",
    storageBucket: "netflex-clone-91b5f.appspot.com",
    messagingSenderId: "568351004810",
    appId: "1:568351004810:web:f9a49a2b3265c9b2f3f573"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth}
  export default db;