export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-particles'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'nuxt-responsive-loader'
  ],
  /*
   ** Webfontloader config
   ** See https://regenrek.com/posts/how-to-use-tailwind-css-1.0.1-in-nuxt/#bonus-use-google-fonts-with-nuxt-js-and-tailwind
   */
  webfontloader: {
    google: {
      families: ['Lato:300,400,700']
    }
  },
  /*
   ** Optimize Images
   ** See https://www.npmjs.com/package/nuxt-responsive-loader?utm_source=share&utm_medium=ios_app
   */

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vue-particles'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
