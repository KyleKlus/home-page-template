/** @format */
import type { Metadata, Viewport } from 'next'
import { siteConfig } from "../siteConfig";
import Content from '@/lib/container/Content';

export const metadata: Metadata = { ...siteConfig.metadata.en };

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={['crossed', 'applyHeaderOffset', 'applyBottomPadding'].join(' ')}>
        </Content>
    );
}