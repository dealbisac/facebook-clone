import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCyuNUKQULLIr6QLBh8dj6mJOzUG6OVdyk",
    authDomain: "facebook-clone-003.firebaseapp.com",
    databaseURL: "https://facebook-clone-003.firebaseio.com",
    projectId: "facebook-clone-003",
    storageBucket: "facebook-clone-003.appspot.com",
    messagingSenderId: "847086479497",
    appId: "1:847086479497:web:b939dfb68da130185c3e58",
    measurementId: "G-H3F9X0YFM1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;