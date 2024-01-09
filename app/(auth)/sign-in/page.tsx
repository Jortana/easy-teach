'use client';

import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div>
      <h1 onClick={() => signIn()}>SignInPage</h1>
    </div>
  );
};

export default SignIn;
