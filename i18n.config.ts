export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {},
    ar: {},
    ru: {},
  },
  fallbackLocale: 'en',
  sync: true,
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false
}))
