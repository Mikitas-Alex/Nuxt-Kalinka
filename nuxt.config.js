//nuxt.config.js
export default {
  target: "tatic",

  head: {
    title: "my-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js' },
    ],
  },

  css: ["@/style/reset.css", "@/style/style.css"],

  router: {
    routes: [
      {
        name: 'object',
        path: '/object/:id',
        component: 'pages/object/_id.vue'
      }
    ]
  },

  plugins: [
    
  ],
  proxy: {
    '/api': 'https://kalinka.phuket.forsale',
  },

  components: true,

  buildModules: [
    
  ],

  modules: [
    
  ],
  swiper: {},

  build: {
    transpile: ['node-fetch'],
  },
};
