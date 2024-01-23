'use client'

// TODO: find a way of using contexts
// import AuthProvider from '@/lib/components/context/AuthContext';
// import DataBaseProvider from '@/lib/components/context/DatabaseContext';


export function Providers({ children }: { children: React.ReactNode }) {
  return <>
    {/* <AuthProvider>
      <DataBaseProvider> */}
    {children}
    {/* </DataBaseProvider>
    </AuthProvider> */}
  </>
}