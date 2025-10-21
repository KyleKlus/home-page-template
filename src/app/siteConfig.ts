import { defaultSiteConfig } from "@/lib/defaultSiteConfig";

const basePath: string = '';
const metadataEn = {
    title: "Kyle Klus | Website 🚀",
    description: "Website of Kyle Klus.",
    openGraph: {
        type: "website",
        url: `${defaultSiteConfig.url}${basePath}`,
        title: "Kyle Klus | Website",
        description: "Website of Kyle Klus.",
    },
}

export const siteConfig = {
    ...defaultSiteConfig,
    basePath,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            description: "Website von Kyle Klus.",
            openGraph: {
                ...metadataEn.openGraph,
                description: "Website von Kyle Klus.",
            },
        }
    }
};