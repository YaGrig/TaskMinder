import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources_ru from "./public/locales/ru/common.json";
import resources_en from "./public/locales/en/common.json";

export const getI18nConfig = (locale?: string) => ({
  resources: {
    ru: {
      translation: resources_ru,
    },
    en: {
      translation: resources_en,
    },
  },
  lng: locale,
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
  react: {
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "span"],
  },
});

export const getLocale = (locale?: string) => {
  return locale ?? getI18nConfig().fallbackLng;
};

export const init_i18n = (locale: string) => {
  i18n
    .use(initReactI18next)
    .init(getI18nConfig(locale));
};
