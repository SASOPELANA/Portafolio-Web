import type { Experience, I18nExperience } from "../types/experiencie.types";

export const EXPERIENCE = (i18n: I18nExperience): Experience[] => [
  {
    title: i18n.EXPERIENCE.ITEMS_5.TITLE,
    date: i18n.EXPERIENCE.ITEMS_5.DATE,
    description: i18n.EXPERIENCE.ITEMS_5.DESCRIPTION,
    link: "https://github.com/SASOPELANA/proyecto-final-react-tienda",
  },
  {
    title: i18n.EXPERIENCE.ITEMS_4.TITLE,
    date: i18n.EXPERIENCE.ITEMS_4.DATE,
    description: i18n.EXPERIENCE.ITEMS_4.DESCRIPTION,
    link: "https://github.com/SASOPELANA/proyecto-final-node-tech",
  },
  {
    title: i18n.EXPERIENCE.ITEMS_3.TITLE,
    date: i18n.EXPERIENCE.ITEMS_3.DATE,
    description: i18n.EXPERIENCE.ITEMS_3.DESCRIPTION,
    link: "https://github.com/SASOPELANA/Talento_Tech",
  },
  {
    title: i18n.EXPERIENCE.ITEMS_2.TITLE,
    date: i18n.EXPERIENCE.ITEMS_2.DATE,
    description: i18n.EXPERIENCE.ITEMS_2.DESCRIPTION,
    link: "https://github.com/SASOPELANA/Programacion2/tree/main",
  },
  {
    title: i18n.EXPERIENCE.ITEMS_1.TITLE,
    date: i18n.EXPERIENCE.ITEMS_1.DATE,
    description: i18n.EXPERIENCE.ITEMS_1.DESCRIPTION,
    link: "https://github.com/SASOPELANA/curso-de-c-",
  },
];
