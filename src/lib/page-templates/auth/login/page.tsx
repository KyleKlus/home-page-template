'use client'
import Content from '@/lib/components/container/Container';
import styles from './Login.module.scss'
import Image from 'next/image';

import Card from '@/lib/components/container/Card';
import { UserCredential } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { IAuthContext, RedirectPathOptions, redirectPaths, useAuth } from '@/lib/components/context/AuthContext';

import googleLogo from '@/lib/assets/google.png';
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { user, loading } = useAuth();

  const authContext: IAuthContext = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      setErrorMsg('');
      authContext.googleSignIn();
    }
    catch (error) {
      setErrorMsg('Something went wrong');
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredentials: UserCredential = await authContext.emailLogin(email, password);
      if (userCredentials.user !== null) {
        setErrorMsg('');
        router.push(redirectPaths[RedirectPathOptions.LockedPage]);
      }
    }
    catch (error) {
      setErrorMsg('Wrong credentials');
    }
  };

  if (user) {
    router.push(redirectPaths[RedirectPathOptions.LockedPage]); // Modify if needed
  }

  return (
    <Content className={['applyHeaderOffset', 'dotted'].join(' ')}>
      {!loading && !user &&
        <Card className={[styles.loginPageCard].join(' ')}>
          <h1>Login</h1>
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
          <button className={[styles.loginButton].join(' ')} onClick={handleSignIn}>
            <h2>Login</h2>
          </button>
          <label className={[styles.textboxLabel, styles.smallInfoLabel].join(' ')}>Don&apos;t have an account yet? {<Link href={'/auth/register'}>Register</Link>}</label>
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
