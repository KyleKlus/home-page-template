/** @format */
import type { Metadata, Viewport } from 'next'
import { defaultSiteConfig } from "./defaultSiteConfig";
import Content from '@/lib/container/Content';

export const metadata: Metadata = { ...defaultSiteConfig.metadata.en };

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={['dotted', 'applyHeaderOffset', 'applyBottomPadding'].join(' ')}>
        </Content>
    );
}