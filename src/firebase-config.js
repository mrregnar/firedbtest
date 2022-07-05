import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDgizsZ3dcTcLkKvS_YGe7-m3L4dGNZyGo",
  authDomain: "fir-tutped.firebaseapp.com",
  projectId: "fir-tutped",
  storageBucket: "fir-tutped.appspot.com",
  messagingSenderId: "325839142013",
  appId: "1:325839142013:web:5363ea9a26ad01883ac514"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

