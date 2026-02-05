import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { ImageMetadata } from "astro";

export interface Tag {
  name: string;
  class: string;
  icon?: AstroComponentFactory;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: ImageMetadata;
  tags: Tag[];
}

export interface I18nProjects {
  PROJECTS: {
    ITEMS_1: ProjectItem;
    ITEMS_2: ProjectItem;
    ITEMS_3: ProjectItem;
    ITEMS_4: ProjectItem;
    ITEMS_5: ProjectItem;
    ITEMS_6: ProjectItem;
    ITEMS_7: ProjectItem;
  };
}

interface ProjectItem {
  TITLE: string;
  DESCRIPTION: string;
}
