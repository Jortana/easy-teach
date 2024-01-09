'use client';

import { useSession } from 'next-auth/react';

const SignUp = () => {
  const session = useSession();
  console.log(session);
  return <div>SignUp</div>;
};

export default SignUp;
