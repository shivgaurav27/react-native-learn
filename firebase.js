import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDQb_KYlnYFvGhtzvGIeJPl4KITMY4nSVg",
    authDomain: "signal-clone-yt-27880.firebaseapp.com",
    projectId: "signal-clone-yt-27880",
    storageBucket: "signal-clone-yt-27880.appspot.com",
    messagingSenderId: "473041434022",
    appId: "1:473041434022:web:e126d1f42cbc31e5a40b67"
};


let app;

if (firebase.apps.length === 0) {
    app = firebase.initializedApp(firebaseConfig)
} else {
    app = firebase.app()
}


const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth }
