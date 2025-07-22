/** @format */
import styles from './Layout.module.css';

import Footer from '@/lib/layouts/footer/Footer';
import Header from '@/lib/layouts/header/Header';
import './default-variables.css';
import './globals.css';

import Main from '@/lib/container/Main';

import headerStyles from '@/lib/layouts/header/Header.module.css'

import ScrollNavLink from '@/lib/interaction/links/ScrollNavLink';

import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

interface ILayoutProps {
    title?: string;
    className?: string;
}


export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
    return (
        <html style={{ fontFamily: firaCode.style.fontFamily }}>
            <body>
                <Header >
                    <ScrollNavLink
                        className={headerStyles.headerNavLink}
                        elementName="https://kyleklus.de/#heroPage"
                        displayText="Home"
                    />
                    <ScrollNavLink
                        className={headerStyles.headerNavLink}
                        elementName="https://kyleklus.de/#portfolioPage"
                        displayText="Portfolio"
                    />
                    <ScrollNavLink
                        className={headerStyles.headerNavLink}
                        elementName="https://kyleklus.de/#aboutPage"
                        displayText="About"
                    />
                </Header >
                <Main>
                    <div id={'top'}></div>
                    {props.children}
                    <Footer />
                </Main>
            </body>
        </html>
    );
}

function isCurrentWindow(currentPath: string, buttonPath: string): boolean {
    const currentPathName: string = currentPath.split('/').reverse()[0].replace('#', '');
    const buttonPathName: string = buttonPath.split('/').reverse()[0].replace('#', '');

    return (buttonPathName.length === 0 && currentPathName.length === 0) ||
        (buttonPathName.length !== 0 && currentPathName.length !== 0 && buttonPathName.indexOf(currentPathName) !== -1);
}

function applyCurrentWindowStyle(currentPath: string, buttonPath: string): string {
    return isCurrentWindow(currentPath, buttonPath)
        ? styles.isCurrentWindow
        : '';
}
