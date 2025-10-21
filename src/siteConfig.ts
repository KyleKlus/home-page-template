import { defaultSiteConfig } from "@/lib/defaultSiteConfig";

const basePath: string = '';
const metadataEn = {
    title: "Kyle Klus | Website 🚀",
    description: "This is the Portfolio of Kyle Klus.",
    keywords: ["Kyle Klus", "Portfolio", "Personal Website"],
    abstract: "This is the Portfolio of Kyle Klus.",
    category: "portfolio",
    authors: [{ name: defaultSiteConfig.author, url: defaultSiteConfig.url }],
    creator: defaultSiteConfig.author,
    publisher: defaultSiteConfig.author,
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        type: "website",
        url: `${defaultSiteConfig.url}${basePath}`,
        title: "Kyle Klus | Website",
        description: "This is the Portfolio of Kyle Klus.",
    },
}

export const siteConfig = {
    ...defaultSiteConfig,
    basePath,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            description: "Portfolio von Kyle Klus.",
            abstract: "Portfolio von Kyle Klus.",
            keywords: ["Kyle Klus", "Portfolio", "Homepage"],
            openGraph: {
                ...metadataEn.openGraph,
                description: "Portfolio von Kyle Klus.",
            },
        }
    }
};