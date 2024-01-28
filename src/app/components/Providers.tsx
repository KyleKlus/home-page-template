'use client'
import { Theme, ThemePanel } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes'

// TODO: find a way of using contexts
// import AuthProvider from '@/lib/components/context/AuthContext';
// import DataBaseProvider from '@/lib/components/context/DatabaseContext';


export function Providers({ children }: { children: React.ReactNode }) {
  return <>
    <ThemeProvider attribute='class'>
      <Theme accentColor="red" grayColor="sage" panelBackground="solid">
        {/* <AuthProvider>
      <DataBaseProvider> */}
        {children}
        {/* </DataBaseProvider>
    </AuthProvider> */}
      </Theme>
    </ThemeProvider>
  </>
}