'use client'
import { createContext, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

export interface ILockContext { }

const defaultValue: ILockContext = {}

const LockContext: React.Context<ILockContext> = createContext<ILockContext>(defaultValue);

const LockProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.loading && !auth.user) router.push("/login");
    }, [auth.user, auth.loading]);


    return <LockContext.Provider
        value={{
        }}
    >
        {auth.user ? props.children : null}
    </LockContext.Provider>;
};

export default LockProvider;