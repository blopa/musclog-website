/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/musclog-website",
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/locales/en-US/translation.json',
                destination: '/musclog-website/locales/en-US/translation.json',
            },
            {
                source: '/locales/pt-BR/translation.json',
                destination: '/musclog-website/locales/pt-BR/translation.json',
            },
            {
                source: '/locales/nl-NL/translation.json',
                destination: '/musclog-website/locales/nl-NL/translation.json',
            },
            {
                source: '/locales/es-ES/translation.json',
                destination: '/musclog-website/locales/es-ES/translation.json',
            },
        ]
    },
    // i18n: {
    //     locales: ['en-US', 'pt-BR', 'nl-NL'],
    //     defaultLocale: 'en-US',
    // },
};

export default nextConfig;
