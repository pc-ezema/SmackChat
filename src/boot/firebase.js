// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHgXipk-JLET_lLJI8tXPjs7az_Adbdzc',
  authDomain: 'smackchat-3dd3b.firebaseapp.com',
  projectId: 'smackchat-3dd3b',
  storageBucket: 'smackchat-3dd3b.appspot.com',
  messagingSenderId: '1024739506582',
  appId: '1:1024739506582:web:c5172256c3cc5104af85b7'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
