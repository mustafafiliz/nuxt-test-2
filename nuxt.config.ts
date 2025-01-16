// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@element-plus/nuxt',
    'nuxt-svgo',
    '@nuxt/eslint'
    // '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  site: {
    url: 'https://beosin.com',
    name: 'Beosin',
    description: ''
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL || 'https://beosin.com'
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'https://beosin.com/api/**'
    }
  },
  devServer: {
    host: '/',
    port: 3000
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'firebase',
    output: {
      publicDir: './deploy/client',
      dir: './deploy'
    },
    devProxy: {
      '^/api': {
        target: 'https://beosin.com',
        changeOrigin: true
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/style/mixin.scss" as *;
          `
        }
      }
    }
  },
  elementPlus: {
    themes: ['dark'],
    components: []
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2, // 缩进
        quotes: 'single', // 强制使用一致的反勾号、双引号或单引号
        semi: false, // 禁用行尾使用分号
        commaDangle: 'never' // 禁止结尾逗号
      }
    }
  },
  googleFonts: {
    families: {
      'Bai Jamjuree': [400, 500, 600]
    }
  },
  i18n: {
    langDir: 'lang',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'ar',
        dir: 'rtl',
        file: 'ar.json'
      },
      {
        code: 'ru',
        file: 'ru.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false
  },
  // colorMode: {
  //   fallback: 'dark', // fallback value if not system preference found
  //   classSuffix: '',
  // },
  svgo: {
    componentPrefix: 'i'
  }
})
