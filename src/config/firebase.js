import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDHWA9L5zCkqYa-W57BT1ES495-Sl7glmU',
  authDomain: 'vue-study-104.firebaseapp.com',
  databaseURL: 'https://vue-study-104.firebaseio.com',
  projectId: 'vue-study-104',
  storageBucket: 'vue-study-104.appspot.com',
  messagingSenderId: '376785339958',
  appId: '1:376785339958:web:8a3044df6c878c62'
}

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
export default db

