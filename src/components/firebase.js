    
import * as firebase from 'firebase';

const config = {
  apiKey: '***REMOVED***',
  authDomain: '***REMOVED***',
  databaseURL: '***REMOVED***/',
  storageBucket: '***REMOVED***.appspot.com'
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};