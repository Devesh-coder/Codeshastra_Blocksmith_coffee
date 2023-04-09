/** @format */

import { useState } from 'react';
// import './Button.css';
import { signInWithGoogle } from './Firebase';

function Button() {
  const [sign, setSign] = useState(false);
  return (
    <div>
      <button
              class="login-with-google-btn"
              onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1> Signed in as {localStorage.getItem('name')}</h1>

      {/* <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} /> */}
    </div>
  );
}

export default Button;
