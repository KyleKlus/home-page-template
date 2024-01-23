/** @format */
// INFO: Only use with auth stuff
import { IAuthContext, RedirectPathOptions, redirectPaths, useAuth, AuthContext } from '@/lib/components/context/AuthContext';

import Content from '@/lib/components/container/Content';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

function Home() {
  const authContext: IAuthContext = useContext(AuthContext);
  const router = useRouter();

  if (authContext.user !== null) {
    router.push(redirectPaths[RedirectPathOptions.LockedPage]);
  }

  return (
    <Content className={['applyHeaderOffset', 'dotted'].join(' ')}>
    </Content>
  );
}

export default Home;