import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { en } from "./en";
import { ua } from "./ua";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            uk: { translation: ua },
        },
        supportedLngs: ["uk", "en"],
        fallbackLng: "uk",
        detection: {
            order: ["cookie", "navigator"],
            caches: ["cookie"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
