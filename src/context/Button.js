/** @format */

import { useState } from 'react';
// import './Button.css';
import { signInWithGoogle } from './Firebase';

function Button() {
  const [sign, setSign] = useState(false);
  return (
    <div>
      {sign ? (
        <h1> Signed in as {localStorage.getItem('name')}</h1>
      ) : (
        <button
          class="login-with-google-btn"
          onClick={signInWithGoogle && setSign(true)}>
          Sign in with Google
        </button>
      )}
      {/* <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} /> */}
    </div>
  );
}

export default Button;
