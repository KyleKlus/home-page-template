const basePath: string = '';
const url: string = 'https://kyleklus.de';
const heropageUrl: string = `${url}/#heroPage`;
const portfoliopageUrl: string = `${url}/#portfolioPage`;
const aboutpageUrl: string = `${url}/#aboutPage`;
const privacyUrl: string = `${url}/privacy`;
const termsOfServiceUrl: string = `${url}/terms-of-service`;
const projectsUrl: string = `${url}/projects`;
const cookbookDEUrl: string = `${url}/Kyles-Cookbook/de`;
const cookbookENUrl: string = `${url}/Kyles-Cookbook/en`;
const receiptManagerUrl: string = `${url}/receipt-manager-tool`;
const textToolsUrl: string = `${url}/text-tools`;
const qrCodeGeneratorUrl: string = `${url}/qr-code-generator`;
const githubUrl: string = 'https://github.com/KyleKlus';
const linkedinUrl: string = 'https://www.linkedin.com/in/kyle-klus-9a2588275';
const kofiUrl: string = 'https://ko-fi.com/majorenkidu';
const contactUrl: string = 'mailto:kyle.klus.2@gmail.com';
const author: string = 'Kyle Klus';
const metadataEn = {
    title: "Kyle Klus | Website 🚀",
    description: "Website of Kyle Klus.",
    openGraph: {
        type: "website",
        url: url,
        title: "Kyle Klus | Website",
        description: "Website of Kyle Klus.",
    },
}

export const defaultSiteConfig = {
    basePath,
    url,
    author,
    projectsUrl,
    cookbookDEUrl,
    cookbookENUrl,
    receiptManagerUrl,
    textToolsUrl,
    qrCodeGeneratorUrl,
    heropageUrl,
    portfoliopageUrl,
    aboutpageUrl,
    privacyUrl,
    termsOfServiceUrl,
    githubUrl,
    linkedinUrl,
    kofiUrl,
    contactUrl,
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