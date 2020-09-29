export default {
  ssr: false,

  render: {
    resourceHints: false,
  },

  head: {
    title: 'Scheduler Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: ['plugins/filters.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxt/content'],

  axios: {},

  content: {},

  build: {},
}
