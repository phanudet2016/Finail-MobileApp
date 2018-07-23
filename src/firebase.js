import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD3MKsykvqA7QjDWD6-m8zPjrBZJc1oP4w",
    authDomain: "klogic-final.firebaseapp.com",
    databaseURL: "https://klogic-final.firebaseio.com",
    projectId: "klogic-final",
    storageBucket: "klogic-final.appspot.com",
    messagingSenderId: "451326771632"
}
firebase.initializeApp(config)

export const db = firebase.database()
export const PersonalRef = db.ref('Personals')
export const RegisterSubjectRef = db.ref('RegisterSubject')