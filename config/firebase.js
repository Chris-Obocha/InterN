import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCbpbA_Qbv8C9TuEhbsmjc0U4kyrn7Gn3A",
  // authDomain: "test-9faa8.firebaseapp.com",
  // projectId: "test-9faa8",
  // storageBucket: "test-9faa8.appspot.com",
  // messagingSenderId: "19872625079",
  // appId: "1:19872625079:web:dbd5f5692571176adaf832",
  // measurementId: "G-VVJPFH86R2"

  apiKey: "AIzaSyCDuIFQrCFLAIysUeVXuYmd9nqVljUV3zw",
  authDomain: "intern-a9ad7.firebaseapp.com",
  projectId: "intern-a9ad7",
  // storageBucket: "intern-a9ad7.appspot.com",
  messagingSenderId: "52624792825",
  appId: "1:52624792825:web:6eff00888676bcb3705628",
  measurementId: "G-CJDRCR9S8R",
  storageBucket: 'gs://intern-a9ad7.appspot.com/'
};

let app;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user != null) {
//     setIsLoggedIn(true)
//   } else {
//     setIsLoggedIn(false);
//   }
// });


export const auth = firebase.auth();
export { firebase }
