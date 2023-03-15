// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Aung Htet Paing',
            meta: [
                { name: 'description', content: 'My Portfolio Site' },
                { property: 'og:title', content: 'Aung Htet Paing' },
                { property: 'og:description', content: 'My Portfolio Site' },
                {
                    property: 'og:url',
                    content: 'https://aunghtetpaing.netlify.app/',
                },
                {
                    property: 'og:image',
                    content:
                        'https://aunghtetpaing.netlify.app/img/meta-tag-image.png',
                },
                {
                    property: 'twitter:title',
                    content: 'Aung Htet Paing',
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'twitter:image',
                    content:
                        'https://aunghtetpaing.netlify.app/img/meta-tag-image.png',
                },
            ],

            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicons/apple-touch-icon.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicons/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '64x64',
                    href: '/favicons/favicon-64x64.png',
                },
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity'],
    sanity: {
        projectId: 'i9mf69wa',
    },
});
