import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import sr from "./sr.json";
import nl from "./nl.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sr: { translation: sr },
      nl: { translation: nl },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;