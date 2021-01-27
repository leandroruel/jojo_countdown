import { defaultLocale } from "next/router";

const readableDate = (datetimeString, lang = defaultLocale) => {
  return datetimeString.toLocaleDateString(lang);
};

export { readableDate };
