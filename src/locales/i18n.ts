import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './language/languages'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'vi'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['cookie', 'localStorage', 'path', 'subdomain', 'htmlTag'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
