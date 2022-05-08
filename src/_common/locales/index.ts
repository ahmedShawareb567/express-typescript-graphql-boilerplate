import path from "path";
import i18next from "i18next";
import Backend from "i18next-node-fs-backend";
import i18nextMiddleware from "i18next-express-middleware";

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(
        process.cwd(),
        "/src/_common/locales/{{lng}}/{{ns}}.json"
      ),
    },
    detection: {
      order: ["header", "cookie"],
      caches: ["cookie"],
    },
    fallbackLng: "ar",
    preload: ["en", "ar"],
  });

export const i18nNext = i18next;
