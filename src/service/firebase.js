import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBlqRWqqQuyq57mmFVqh9feLsl8F8Qxgfg",
    authDomain: "mundial2018-b8bb3.firebaseapp.com",
    databaseURL: "https://mundial2018-b8bb3.firebaseio.com",
    projectId: "mundial2018-b8bb3",
    storageBucket: "mundial2018-b8bb3.appspot.com",
    messagingSenderId: "48001802448"
}
firebase.initializeApp(config)

export default {
    database: firebase.database()
}