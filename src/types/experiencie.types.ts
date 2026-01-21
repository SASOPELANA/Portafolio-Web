export interface Experience {
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface I18nExperience {
  EXPERIENCE: {
    ITEMS_1: ExperienceItem;
    ITEMS_2: ExperienceItem;
    ITEMS_3: ExperienceItem;
    ITEMS_4: ExperienceItem;
    ITEMS_5: ExperienceItem;
  };
}

interface ExperienceItem {
  TITLE: string;
  DATE: string;
  DESCRIPTION: string;
}
