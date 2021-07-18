import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import general_en_us from './en_us/General.json';
import general_zh_cn from './zh_cn/General.json';
import home_en_us from './en_us/Home.json';
import home_zh_cn from './zh_cn/Home.json';

export const defaultNS = 'general'
export const resources = {
  en_us: {
    General: general_en_us,
    Home: home_en_us
  },
  zh_cn: {
    General: general_zh_cn,
    Home: home_zh_cn
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en_us',
    ns: ['General', 'Home'],
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
