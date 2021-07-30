import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8qcsEnTMgAmn-NjKNDcouxZ7wdjzCg50",
  authDomain: "wireless-buzzer-1976f.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-1976f-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-1976f",
  storageBucket: "wireless-buzzer-1976f.appspot.com",
  messagingSenderId: "637091663674",
  appId: "1:637091663674:web:567656e32247dfb7778a03"
};

if(!firebase.apps.length){
  firebase.initializeApp (firebaseConfig)
}

export default firebase.database()