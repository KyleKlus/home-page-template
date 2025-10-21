import type { MetadataRoute } from 'next'
export const dynamic = 'force-static';
export const revalidate = 60; // Optional
import { siteConfig } from "../siteConfig";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.metadata.en.title,
        short_name: siteConfig.metadata.en.title,
        description: siteConfig.metadata.en.description,
        categories: [siteConfig.metadata.en.category],
        start_url: siteConfig.metadata.en.openGraph.url,
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon"
            },
            {
                src: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            },
            {
                src: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        theme_color: "#edf8ee",
        background_color: "#edf8ee",
        display: "standalone"
    }
}