import i18n from 'i18next';
import Backend from 'i18next-fluent-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Fluent from 'i18next-fluent';
i18n
  .use(Fluent)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS: 'default',
    fallbackNS: 'default',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      useSuspense: false,
    },

    backend: {
      loadPath: 'locales/{{ns}}/{{lng}}.ftl'
    }
  });

export default i18n;
