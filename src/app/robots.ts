import type { MetadataRoute } from 'next'

export const dynamic = 'force-static';
export const revalidate = 60; // Optional

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                "userAgent": "GPTBot",
                "disallow": "/"
            },
            {
                "userAgent": "ChatGPT-User",
                "disallow": "/"
            },
            {
                "userAgent": "Google-Extended",
                "disallow": "/"
            },
            {
                "userAgent": "PerplexityBot",
                "disallow": "/"
            },
            {
                "userAgent": "Amazonbot",
                "disallow": "/"
            },
            {
                "userAgent": "ClaudeBot",
                "disallow": "/"
            },
            {
                "userAgent": "Omgilibot",
                "disallow": "/"
            },
            {
                "userAgent": "FacebookBot",
                "disallow": "/"
            },
            {
                "userAgent": "Applebot",
                "disallow": "/"
            },
            {
                "userAgent": "anthropic-ai",
                "disallow": "/"
            },
            {
                "userAgent": "Bytespider",
                "disallow": "/"
            },
            {
                "userAgent": "Claude-Web",
                "disallow": "/"
            },
            {
                "userAgent": "Diffbot",
                "disallow": "/"
            },
            {
                "userAgent": "ImagesiftBot",
                "disallow": "/"
            },
            {
                "userAgent": "Omgili",
                "disallow": "/"
            },
            {
                "userAgent": "YouBot",
                "disallow": "/"
            },
            {
                "userAgent": "*",
                "allow": "/",
            }
        ],
    }
}