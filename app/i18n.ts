// import i18next from 'i18next'
// import { initReactI18next } from 'react-i18next';
// // import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationKR from './assets/locales/kr/translation.json';
// import translationEN from './assets/locales/gb/ translation.json';
// import translationCN from './assets/locales/cn/translation.json';



export default {
  // This is the list of languages your application supports
  supportedLngs: ["en", "kr"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "en",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false },
};

// the translations
// const resources = {
//   gb: {
//     translation: translationEN
//   },
//   kr: {
//     translation: translationKR
//   },
//   cn: {
//     translation: translationCN
//   }
// };


// for using with backend

// i18next
//   .use(Backend)
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     supportedLngs: ['gb', 'kr'],
//     fallbackLng: 'gb',
//     debug: true,
//     // Options for language detector
//     detection: {
//       order: ['path', 'cookie', 'htmlTag'],
//       caches: ['cookie'],
//     },
//     // react: { useSuspense: false },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   })

// i18next
// .use(LanguageDetector)
// .use(initReactI18next) // passes i18n down to react-i18next
// .init({
//   resources,
//   fallbackLng: "gb", // use gb if detected lng is not available

//   interpolation: {
//     escapeValue: false // react already safes from xss
//   }
//   });


// export default i18next;