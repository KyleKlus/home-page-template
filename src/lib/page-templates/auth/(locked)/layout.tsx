import type { Viewport } from 'next'
import { Metadata } from 'next'

import Main from '@/app/components/main/Main'
import ScrollNavLink from '@/lib/components/interaction/links/ScrollNavLink'
import Header from '@/app/components/header/Header'
import headerStyles from '@/app/components/header/Header.module.scss'
import Footer from '@/app/components/footer/Footer'

import ThemeButton from '@/app/components/themeButton/ThemeButton'
import LockProvider from '@/lib/components/context/LockContext'

function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LockProvider>
      <Header >
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="https://kyleklus.github.io/#heroPage"
          displayText="Home"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="https://kyleklus.github.io/#portfolioPage"
          displayText="Portfolio"
        />
        <ScrollNavLink
          className={headerStyles.headerNavLink}
          elementName="https://kyleklus.github.io/#aboutPage"
          displayText="About"
        />
        <ThemeButton />
      </Header >
      <Main>
        <div id={'top'}></div>
        {children}
        <Footer />
      </Main>
    </LockProvider>
  )
}
export default AuthLayout