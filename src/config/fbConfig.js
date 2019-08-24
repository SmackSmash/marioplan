import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAVsUuePcqRSVP3RRLYFfflqhEuomGauLA',
  authDomain: 'marioplan-5b4bc.firebaseapp.com',
  databaseURL: 'https://marioplan-5b4bc.firebaseio.com',
  projectId: 'marioplan-5b4bc',
  storageBucket: '',
  messagingSenderId: '45072260775',
  appId: '1:45072260775:web:cc0bc44880a694f7'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
