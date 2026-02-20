import HtmlIcon from "../components/icons/Html.astro";
import CssIcon from "../components/icons/Css.astro";
import JsIcon from "../components/icons/Js.astro";
import BoostrapIcon from "../components/icons/BoostrapIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import TailwindIcon from "../components/icons/Tailwind.astro";
import TsIcon from "../components/icons/Ts.astro";
import MarkdownIcon from "../components/icons/Markdown.astro";
import NodeIcon from "../components/icons/Node.astro";
import ReactIcon from "../components/icons/React.astro";
import FirebaseIcon from "../components/icons/Firebase.astro";
import JwtIcon from "../components/icons/JwtIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import GroqIcon from "@/components/icons/GroqIcon.astro";
import VercelIcon from "@/components/icons/VercelIcon.astro";
import ViteIcon from "@/components/icons/ViteIcon.astro";

import type { Project, I18nProjects } from "../types/projects.types";

const TAGS = {
  HTML: {
    name: "HTML",
    class: "bg-[#fff] text-black font-bold",
    icon: HtmlIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#fff] text-[#663399] font-bold",
    icon: CssIcon,
  },
  JS: {
    name: "JavaScript",
    class: "bg-[#e5f6d9] text-black font-bold",
    icon: JsIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#ffffff] text-[#7E13F8] font-bold",
    icon: BoostrapIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#003159] text-white font-bold",
    icon: TailwindIcon,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#fff] text-black font-bold",
    icon: AstroIcon,
  },
  TS: {
    name: "TypeScript",
    class: "bg-[#fff] text-[#3178C6] font-bold",
    icon: TsIcon,
  },
  MARKDOWN: {
    name: "Markdown",
    class: "bg-[#fff] text-black font-bold",
    icon: MarkdownIcon,
  },
  NODE: {
    name: "Node.js",
    class: "bg-[#fff] text-[#90C53F] font-bold",
    icon: NodeIcon,
  },
  REACT: {
    name: "React",
    class: "bg-[#ffffff] text-black font-bold",
    icon: ReactIcon,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#FFF] text-black font-bold",
    icon: FirebaseIcon,
  },
  JWT: {
    name: "JWT",
    class: "bg-[#e5f6d9] text-black font-bold",
    icon: JwtIcon,
  },

  EXPRESS: {
    name: "Express.js",
    class: "bg-[#fff] text-[#000] font-bold",
    icon: ExpressIcon,
  },
  GROQ: {
    name: "GROQ",
    class: "bg-[#fff] text-[#000] font-bold",
    icon: GroqIcon,
  },
  VERCEL: {
    name: "Vercel",
    class: "bg-[#fff] text-[#000] font-bold",
    icon: VercelIcon,
  },
  VITE: {
    name: "Vite",
    class: "bg-[#fff] text-[#000] font-bold",
    icon: ViteIcon,
  },
};

import ImagenCss from "../../public/imagen/proyecto-css.webp";
import ImagenCarrito from "../../public/imagen/carrito.webp";
import ImagenBooks from "../../public/imagen/books.webp";
import ImagenLanding from "../../public/imagen/landing-motos.webp";
import ImageEventoGamer from "../../public/imagen/imagen-evento-gamer.webp";
import ImageReact from "../../public/imagen/react-node.webp";
import ImageNoticias from "../../public/imagen/pagina-noticia-moderna.webp";
import ImageChatBot from "../../public/imagen/chat-bot-page.webp";

export const PROJECTS = (i18n: I18nProjects): Project[] => [
  {
    title: i18n.PROJECTS.ITEMS_8.TITLE,
    description: i18n.PROJECTS.ITEMS_8.DESCRIPTION,
    link: "https://chat-bot-landing.vercel.app",
    github: "https://github.com/SASOPELANA/chat-bot-landing",
    image: ImageChatBot,
    tags: [
      TAGS.REACT,
      TAGS.VITE,
      TAGS.TS,
      TAGS.JS,
      TAGS.TAILWIND,
      TAGS.NODE,
      TAGS.EXPRESS,
      TAGS.GROQ,
      TAGS.VERCEL,
    ],
  },
  {
    title: i18n.PROJECTS.ITEMS_7.TITLE,
    description: i18n.PROJECTS.ITEMS_7.DESCRIPTION,
    link: "https://pagina-noticias-moderna-astro.vercel.app/",
    github: "https://github.com/SASOPELANA/pagina-noticias-moderna-astro",
    image: ImageNoticias,
    tags: [
      TAGS.ASTRO,
      TAGS.TS,
      TAGS.TAILWIND,
      TAGS.CSS,
      TAGS.MARKDOWN,
      TAGS.HTML,
    ],
  },
  {
    title: i18n.PROJECTS.ITEMS_6.TITLE,
    description: i18n.PROJECTS.ITEMS_6.DESCRIPTION,
    link: "https://proyecto-final-react-tienda.vercel.app/",
    github: "https://github.com/SASOPELANA/proyecto-final-react-tienda",
    image: ImageReact,
    tags: [
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.JS,
      TAGS.NODE,
      TAGS.EXPRESS,
      TAGS.TS,
      TAGS.FIREBASE,
      TAGS.JWT,
    ],
  },

  {
    title: i18n.PROJECTS.ITEMS_5.TITLE,
    description: i18n.PROJECTS.ITEMS_5.DESCRIPTION,
    link: "https://remake-inca-cup-2026.vercel.app/",
    github: "https://github.com/SASOPELANA/Remake-Evento-Gamers",
    image: ImageEventoGamer,
    tags: [TAGS.ASTRO, TAGS.TS, TAGS.TAILWIND, TAGS.MARKDOWN],
  },
  {
    title: i18n.PROJECTS.ITEMS_4.TITLE,
    description: i18n.PROJECTS.ITEMS_4.DESCRIPTION,
    link: "https://clon-landing-motos.vercel.app/",
    github: "https://github.com/SASOPELANA/Clon-Tesla-Landing",
    image: ImagenLanding,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.TAILWIND, TAGS.ASTRO, TAGS.TS],
  },
  {
    title: i18n.PROJECTS.ITEMS_3.TITLE,
    description: i18n.PROJECTS.ITEMS_3.DESCRIPTION,
    link: "https://books-recomendados.vercel.app/",
    github: "https://github.com/SASOPELANA/Curso-Astro5-midu",
    image: ImagenBooks,
    tags: [
      TAGS.HTML,
      TAGS.CSS,
      TAGS.JS,
      TAGS.TAILWIND,
      TAGS.ASTRO,
      TAGS.TS,
      TAGS.MARKDOWN,
    ],
  },
  {
    title: i18n.PROJECTS.ITEMS_2.TITLE,
    description: i18n.PROJECTS.ITEMS_2.DESCRIPTION,
    link: "https://proyecto-final-talento-tech-rose.vercel.app/",
    github: "https://github.com/SASOPELANA/ProyectoFinal-TalentoTech",
    image: ImagenCarrito,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.BOOTSTRAP],
  },
  {
    title: i18n.PROJECTS.ITEMS_1.TITLE,
    description: i18n.PROJECTS.ITEMS_1.DESCRIPTION,
    link: "https://proyecto1-css-talento-tech.vercel.app/",
    github:
      "https://github.com/SASOPELANA/Proyecto1-CSS-TalentoTech?tab=readme-ov-file",
    image: ImagenCss,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.BOOTSTRAP],
  },
];
