/** @format */
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/lib/default-look.css';
import './globals.css';
import styles from './Layout.module.css';
import headerStyles from '@/lib/layouts/header/Header.module.css'

import { Fira_Code } from "next/font/google";

import Header from '@/lib/layouts/header/Header';
import Main from '@/lib/container/Main';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';

import { ThemeProvider } from '@/lib/provider/theme-provider';
import ScrollToTargetButton from '@/lib/interaction/forms/buttons/ScrollToTargetButton';
import NavLink from '@/lib/interaction/links/NavLink';
import { siteConfig } from '../siteConfig';
import SiteMapFooter from '@/lib/layouts/footer/SiteMapFooter';

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
                            href={siteConfig.heropageUrl}
                        >Home</NavLink>
                        <NavLink
                            className={headerStyles.headerNavLink}
                            href={siteConfig.portfoliopageUrl}
                        >Portfolio</NavLink>
                        <NavLink
                            className={headerStyles.headerNavLink}
                            href={siteConfig.aboutpageUrl}
                        >About</NavLink>
                        <ThemeButton />
                    </Header >
                    <Main>
                        <ScrollToTargetButton targetElementId='top' />
                        <div id={'top'} />
                        {props.children}
                        <SiteMapFooter />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}