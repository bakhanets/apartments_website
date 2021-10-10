module.exports = {
    head: {
        title: 'MSK APART',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Аппартаменты в Москве' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/img/app/favicon.svg' },
        ],
    },
    css: [
        '@/assets/css/main.scss'
    ],
    plugins: [
        { src: '@plugins/main.js' },
        { src: '@plugins/injectComponents.js' },
    ]
}