import * as firebase from 'firebase';

// this can be found: https://console.firebase.google.com/u/0/project/***REMOVED***/settings/general/web:Y2FmNGQ1NTYtZjQwOC00OWY2LTllNTYtMzFjNjc1ZmVkZjVi
const config = {
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***",
  databaseURL: "***REMOVED***",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.appspot.com",
  messagingSenderId: "***REMOVED***",
  appId: "1:***REMOVED***:web:569b700917c7de8a"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};