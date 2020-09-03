import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import esLocale from './langs/es.json';
import enLocale from './langs/en.json';

i18n.use(LanguageDetector).init({
  resources: {
    es: {
      translations: esLocale,
    },
    en: {
      translations: enLocale,
    },
  },
  fallbackLng: 'es',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
