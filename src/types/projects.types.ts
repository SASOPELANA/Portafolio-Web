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
