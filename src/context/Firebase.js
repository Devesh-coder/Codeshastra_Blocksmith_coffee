/** @format */

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

const firebaseConfig = {
	apiKey: 'AIzaSyCSiao98xJT4hu3UOIr1l0b9cbSomRgc80',
	authDomain: 'arduino-ae46c.firebaseapp.com',
	databaseURL: 'https://arduino-ae46c-default-rtdb.firebaseio.com',
	projectId: 'arduino-ae46c',
	storageBucket: 'arduino-ae46c.appspot.com',
	messagingSenderId: '54626434735',
	appId: '1:54626434735:web:c8fc1829c3a74982a11e5a',
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			const name = result.user.displayName
			const email = result.user.email
			const profilePic = result.user.photoURL

			localStorage.setItem('name', name)
			localStorage.setItem('email', email)
			localStorage.setItem('profilePic', profilePic)
		})
		.catch((error) => {
			console.log(error)
		})
}
