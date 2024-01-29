import Footer from '@/lib/components/layouts/footer/Footer';
import Header from '@/lib/components/layouts/header/Header';
import Main from '@/lib/components/layouts/main/Main';
import ThemeButton from '@/lib/components/interaction/forms/buttons/themeButton/ThemeButton';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Header><ThemeButton /></Header> */}
      <Main>
        {children}
        {/* <Footer /> */}
      </Main>
    </>
  )
}
