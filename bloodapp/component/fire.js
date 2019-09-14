import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcif8uV17dZMjiNPKPlTk0krZlAFDnsc0",
    authDomain: "bloodapp-52ad7.firebaseapp.com",
    databaseURL: "https://bloodapp-52ad7.firebaseio.com",
    projectId: "bloodapp-52ad7",
    storageBucket: "bloodapp-52ad7.appspot.com",
    messagingSenderId: "586977584508",
    appId: "1:586977584508:web:5e8e64ab292244a2"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;