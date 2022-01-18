export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  lang: 'pt-BR',
  head: {
    titleTemplate: "HubTech - %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css",
      },
    ],
  },

  dir: {
    components: 'src/components',
    layouts: 'src/layouts',
    pages: 'src/pages'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/src/styles/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/src/components', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    //https://content.nuxtjs.org/
    "@nuxt/content",
  ],

  content: {
    dir: 'src/content'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Hub',
      short_name: 'Hub',
      lang: "pt-BR",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    baseApi: process.env.BASE_API,
    discordLink:
      process.env.DISCORD_LINK || "https://discord.com/invite/RMDSHVkDmE",
  },
  privateRuntimeConfig: {
    discordLink:
      process.env.DISCORD_LINK || "https://discord.com/invite/RMDSHVkDmE",
  },
};
