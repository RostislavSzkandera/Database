import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD7Jg0rwTo12NGyM3xDUMpPfbL-yxa8-N0",
    authDomain: "moviesapp-69fb9.firebaseapp.com",
    projectId: "moviesapp-69fb9",
    storageBucket: "moviesapp-69fb9.appspot.com",
    messagingSenderId: "416791234608",
    appId: "1:416791234608:web:1db1a8779c7c6f46f405f5"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }