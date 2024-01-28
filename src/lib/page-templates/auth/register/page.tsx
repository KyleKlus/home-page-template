'use client'
import Content from '@/lib/components/container/Content';
import styles from './Register.module.scss'
import Image from 'next/image';

import Card from '@/lib/components/container/Card';

import { IAuthContext, RedirectPathOptions, redirectPaths, useAuth } from '@/lib/components/context/AuthContext';
import { UserCredential } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import googleLogo from '@/lib/assets/google.png';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const authContext: IAuthContext = useAuth();
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      setErrorMsg('');
      authContext.googleSignIn();
    }
    catch (error) {
      setErrorMsg('Account already exists');
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredentials: UserCredential = await authContext.emailRegister(email, password);
      if (userCredentials.user !== null) {
        setErrorMsg('');
        router.push(redirectPaths[RedirectPathOptions.LockedPage]);
      }
    }
    catch (error) {
      setErrorMsg('Account already exists or password too short');
    }
  };

  if (user) {
    router.push(redirectPaths[RedirectPathOptions.LockedPage]);
  }

  return (
    <Content className={['applyHeaderOffset', 'dotted'].join(' ')}>
      {!loading && !user &&
        <Card className={[styles.registerPageCard].join(' ')}>
          <h1>Register</h1>
          <br />
          <br />
          <label className={[styles.textboxLabel].join(' ')}>E-Mail</label>
          <input className={[styles.textbox].join(' ')} type="text" placeholder='example@mail.com' value={email} onKeyDown={(e) => {
            if (e.key === 'Enter') { handleSignIn() }
          }} onChange={(e) => {
            setEmail(e.currentTarget.value);
          }} />
          <br />
          <label className={[styles.textboxLabel].join(' ')}>Password</label>
          <input className={[styles.textbox].join(' ')} type="password" placeholder='Password' value={password} onKeyDown={(e) => {
            if (e.key === 'Enter') { handleSignIn() }
          }} onChange={(e) => {
            setPassword(e.currentTarget.value);
          }} />
          <label className={[styles.textboxLabel, styles.errorLabel].join(' ')}>{errorMsg}</label>
          <br />
          <br />
          <button className={[styles.registerButton].join(' ')} onClick={handleSignIn}>
            <h2>Register</h2>
          </button>
          <label className={[styles.textboxLabel, styles.smallInfoLabel].join(' ')}>Already have an account? {<Link href={'/auth/login'}>Login</Link>}</label>
          <br />
          <br />
          <br />
          <h3>Or</h3>
          <br />
          <br />
          <button className={[styles.googleButton].join(' ')} onClick={handleGoogleSignIn}>
            <Image
              src={googleLogo}
              alt={'Google Logo'}
              quality={100}
              width={32}
              height={32}
            />
            <h2>Sign in</h2>
          </button>
        </Card>
      }
    </Content>
  );
}
