/** @format */

import * as React from 'react';
import { useAuth } from '@polybase/react';
import { secp256k1 } from '@polybase/util';
import { useIsAuthenticated } from '@polybase/react';
let private_key = secp256k1.generatePrivateKey();
const createSig = (timestamp, body) => {
  const str_to_sign = `${timestamp}.${JSON.stringify(body)}`;
  return secp256k1.sign(private_key, str_to_sign);
}
export const Authe = () => {
  const { auth, state, loading } = useAuth();
  const [isLoggedIn] = useIsAuthenticated();
  // `state` is null if not logged in, or logged in state e.g. { type: "metamask", userId: "..." }

  // You can use any 32 byte private key from any library,
  // here is an example from @polybase/util

  // `auth` is the prop passed to AuthProvider as auth

  return (
      <div>
         
      {/* <button onClick={createSig(1, 2)}>key</button> */}
      {isLoggedIn ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => auth.signIn()}>Sign In</button>
      )}
    </div>
  );
};
