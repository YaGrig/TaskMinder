import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/locales/en/common.json';
import translationRU from '../public/locales/ru/common.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ru', 
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;