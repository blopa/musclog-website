/** @type {import('next').NextConfig} */

const basePath = "/musclog-website";

const nextConfig = {
    output: 'export',
    basePath,
    reactStrictMode: true,
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/locales/en-US/translation.json',
                    destination:
                        `${basePath}/locales/en-US/translation.json`,
                },
                {
                    source: '/locales/pt-BR/translation.json',
                    destination:
                        `${basePath}/locales/pt-BR/translation.json`,
                },
                {
                    source: '/locales/nl-NL/translation.json',
                    destination:
                        `${basePath}/locales/nl-NL/translation.json`,
                },
                {
                    source: '/locales/es-ES/translation.json',
                    destination:
                        `${basePath}/locales/es-ES/translation.json`,
                },
            ]
        }
    },
    // i18n: {
    //     locales: ['en-US', 'pt-BR', 'nl-NL', 'es-ES'],
    //     defaultLocale: 'en-US',
    // },
};

export default nextConfig;
