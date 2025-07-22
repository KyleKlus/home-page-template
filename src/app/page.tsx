/** @format */

import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
    title: "Kyle Klus | Website 🚀",
    description: "Website of Kyle Klus.",
    openGraph: {
        type: "website",
        url: "https://kyleklus.de/",
        title: "Kyle Klus | Website",
        description: "Website of Kyle Klus.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <>
            <Content className={['applyHeaderOffset', 'dotted'].join(' ')}>
                {/* Insert stuff here */}
            </Content>
        </>
    );
}