import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyCSiao98xJT4hu3UOIr1l0b9cbSomRgc80',
	authDomain: 'arduino-ae46c.firebaseapp.com',
	databaseURL: 'https://arduino-ae46c-default-rtdb.firebaseio.com',
	projectId: 'arduino-ae46c',
	storageBucket: 'arduino-ae46c.appspot.com',
	messagingSenderId: '54626434735',
	appId: '1:54626434735:web:c8fc1829c3a74982a11e5a',
})

export const auth = app.auth()
export default app
