import i18n from 'i18next';
import Backend from 'i18next-fluent-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import Fluent from 'i18next-fluent';
i18n
  .use(Fluent)
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    defaultNS: 'default',
    fallbackNS: 'default',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },

    backend: {
      loadPath: 'locales/{{ns}}/{{lng}}.ftl'
    }
  });

export default i18n;
