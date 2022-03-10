import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config =
{
    apiKey: "AIzaSyALd7Dd1FDAvWR9wYPfXUXtbDf-cBlahHs",
    authDomain: "crown-db-6eb23.firebaseapp.com",
    projectId: "crown-db-6eb23",
    storageBucket: "crown-db-6eb23.appspot.com",
    messagingSenderId: "86756034836",
    appId: "1:86756034836:web:5ff7fcc7b38ac44e705a01",
    measurementId: "G-714JNFES1D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;