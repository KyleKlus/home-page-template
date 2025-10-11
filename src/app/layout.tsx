/** @format */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/lib/default-look.css';
import './globals.css';
import styles from './Layout.module.css';
import headerStyles from '@/lib/layouts/header/Header.module.css'

import { Fira_Code } from "next/font/google";

import Header from '@/lib/layouts/header/Header';
import Main from '@/lib/container/Main';
import Footer from '@/lib/layouts/footer/Footer';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';

import { ThemeProvider } from '@/lib/provider/theme-provider';
import ScrollToTargetButton from '@/lib/interaction/forms/buttons/ScrollToTargetButton';
import NavLink from '@/lib/interaction/links/NavLink';
import { defaultSiteConfig } from './defaultSiteConfig';

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

interface ILayoutProps {
    title?: string;
    className?: string;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
    return (
        <html style={{ fontFamily: firaCode.style.fontFamily }}>
            <body>
                <ThemeProvider>
                    <Header>
                        <NavLink
                            className={headerStyles.headerNavLink}
                            href={defaultSiteConfig.heropageUrl}
                        >Home</NavLink>
                        <NavLink
                            className={headerStyles.headerNavLink}
                            href={defaultSiteConfig.portfoliopageUrl}
                        >Portfolio</NavLink>
                        <NavLink
                            className={headerStyles.headerNavLink}
                            href={defaultSiteConfig.aboutpageUrl}
                        >About</NavLink>
                        <ThemeButton />
                    </Header >
                    <Main>
                        <ScrollToTargetButton targetElementId='top' />
                        <div id={'top'} />
                        {props.children}
                        <Footer />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}