import type { Viewport } from 'next'
import { Metadata } from 'next'
import { Providers } from '@/app/components/Providers'
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });
import './globals.css';

export const metadata: Metadata = {
  title: 'Kyle Klus | Website',
  description: 'Website of Kyle Klus.',
  manifest: '/manifest.webmanifest'
}


export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[firaCode.className].join(' ')}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
