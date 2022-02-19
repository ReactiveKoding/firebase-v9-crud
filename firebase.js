import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyABIEdo0NRCB6ShtiH8xEEXVxKq18BigfA',
  authDomain: 'skiptheline-3b2bd.firebaseapp.com',
  projectId: 'skiptheline-3b2bd',
  storageBucket: 'skiptheline-3b2bd.appspot.com',
  messagingSenderId: '119643639082',
  appId: '1:119643639082:web:100ae436b39e3e85de2253',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
