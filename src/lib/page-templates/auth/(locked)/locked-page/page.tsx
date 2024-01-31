'use client'
import Content from '@/lib/components/container/Container';

import Card from '@/lib/components/container/Card';
import { IAuthContext, useAuth, AuthContext } from '@/lib/components/context/AuthContext';
import { IDataBaseContext, useDB } from '@/lib/components/context/DatabaseContext';
import { useContext } from 'react';

function Home() {
  const authContext: IAuthContext = useContext(AuthContext);
  const dbContext: IDataBaseContext = useDB();

  return (
    <Content className={['applyHeaderOffset'].join(' ')}>
      <Card>
        <button onClick={() => {
          if (authContext.user === null) { return; }
          dbContext.addUserDocument(authContext.user, authContext.user?.displayName + '_secrets', { secret: '42', uid: authContext.user?.uid });
        }}>Add a document</button>
        <button onClick={() => {
          if (authContext.user === null) { return; }
          dbContext.updateUserDocument(authContext.user, authContext.user?.displayName + '_secrets', { secret: '84', uid: authContext.user?.uid });
        }}>Update a document</button>
        <button onClick={() => {
          if (authContext.user === null) { return; }
          dbContext.deleteUserDocument(authContext.user, authContext.user?.displayName + '_secrets');
        }}>Delete a document</button>
        <button onClick={() => {
          if (authContext.user === null) { return; }
          dbContext.readUserDocument(authContext.user, authContext.user?.displayName + '_secrets');
        }}>Read a document</button>
        <button onClick={() => {
          authContext.logOut();
        }}>logOut</button>
      </Card>
    </Content>
  );
}

export default Home;
