import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ltTranslations from '../locales/lt.json';
import enTranslations from '../locales/en.json';
import ruTranslations from '../locales/ru.json';

const resources = {
  lt: {
    translation: ltTranslations
  },
  en: {
    translation: enTranslations
  },
  ru: {
    translation: ruTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'lt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
