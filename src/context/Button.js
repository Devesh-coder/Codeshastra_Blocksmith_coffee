/** @format */

import { useState } from 'react'
// import './Button.css';
import { signInWithGoogle } from './Firebase'
import { collection } from 'firebase/firestore'
import { db } from './Firebase'
import { auth } from './Firebase'

const addUserToDb = async () => {
	collection(db, 'users/' + auth.currentUser.uid).add({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
		photoUrl: auth.currentUser.photoURL,
		uid: auth.currentUser.uid,
		coffee_beans: 1000,
	})
}
function Button() {
	const [sign, setSign] = useState(false)
	return (
		<div>
			<button class='login-with-google-btn' onClick={signInWithGoogle}>
				Change Google Account
			</button>
			<h1> Signed in as {localStorage.getItem('name')}</h1>

			{/* <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} /> */}
		</div>
	)
}

export default Button
