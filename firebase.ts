// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZgTAU0lf9g73rDCf1cp2_ZCZddazy4vM',
  authDomain: 'netflix-clone-2e658.firebaseapp.com',
  projectId: 'netflix-clone-2e658',
  storageBucket: 'netflix-clone-2e658.appspot.com',
  messagingSenderId: '852800468964',
  appId: '1:852800468964:web:79716eec70739f49bfb9f1',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
