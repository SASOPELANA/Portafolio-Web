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

import type { Project } from "../types/projects.types";

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
};

import ImagenCss from "../../public/imagen/proyecto-css.webp";
import ImagenCarrito from "../../public/imagen/carrito.webp";
import ImagenBooks from "../../public/imagen/books.webp";
import ImagenLanding from "../../public/imagen/landing-motos.webp";
import ImageEventoGamer from "../../public/imagen/imagen-evento-gamer.webp";
import ImageReact from "../../public/imagen/react-node.webp";
import ImageNoticias from "../../public/imagen/pagina-noticia-moderna.webp";

export const PROJECTS: Project[] = [
  {
    title: "Pagina de Noticias Moderna",
    description:
      "Proyecto de página de noticias moderna desarrollado con Astro y TailwindCSS, diseñado para ofrecer una experiencia rápida y responsiva. Integra soporte para MDX, procesamiento de imágenes con Sharp, y está preparado con TypeScript para un desarrollo escalable y seguro. Incluye configuraciones de desarrollo, construcción y previsualización listas para usar, además de herramientas de formato como Prettier y plugins específicos de Astro para mantener el código limpio y consistente.",
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
    title: "Carrito de Compras, aplicación Full Stack",
    description:
      "Tienda online completa, desarrollada como proyecto final del curso de React en Talento Tech. La aplicación incluye autenticación de usuarios, carrito de compras, búsqueda de productos y consumo de una API REST propia, implementada con Node.js y Firebase para la gestión completa del catálogo.",
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
    title: "Proyecto Evento Gamer",
    description:
      "Proyecto web de evento para gamers desarrollado con Astro, TypeScript y Tailwind CSS. Incluye navegación rápida y moderna, soporte multilenguaje (inglés y español) con i18n, secciones de arena, categorías y contacto. Totalmente responsiva y adaptable a dispositivos móviles, laptops y escritorios, ofreciendo una experiencia fluida y atractiva para los usuarios.",
    link: "https://remake-inca-cup-2026.vercel.app/",
    github: "https://github.com/SASOPELANA/Remake-Evento-Gamers",
    image: ImageEventoGamer,
    tags: [TAGS.ASTRO, TAGS.TS, TAGS.TAILWIND, TAGS.MARKDOWN],
  },
  {
    title: "Landing Page Motos",
    description:
      "El proyecto Clon-Tesla-Landing, es un ejemplo de una página de aterrizaje de Tesla, específicamente una versión para motos. Este proyecto está desarrollado utilizando HTML, CSS, JavaScript, Astro y Tailwind. La mayor parte del código está escrito en Astro, con pequeños componentes en JavaScript y estilos en CSS. Este proyecto es ideal para aprender sobre la integración de estas tecnologías en una aplicación web.",
    link: "https://clon-landing-motos.vercel.app/",
    github: "https://github.com/SASOPELANA/Clon-Tesla-Landing",
    image: ImagenLanding,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.TAILWIND, TAGS.ASTRO, TAGS.TS],
  },
  {
    title: "Libros Recomendados",
    description:
      "Este proyecto, Libros Recomendados, utiliza tecnologías como HTML, JavaScript, CSS, Tailwind y Astro. Está diseñado para recomendar libros y presenta una imagen destacada de libros en su página principal. Cuenta con una estructura de carpetas organizada para gestionar el contenido y los estilos de manera eficiente. El proyecto emplea Astro para optimizar la generación de páginas estáticas y dinámicas.",
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
    title: "Carrito de Compras / Shopping Cart",
    description:
      "El proyecto final del curso de desarrollo Front End brindado por Talento Tech busca aplicar los conocimientos adquiridos a lo largo del curso mediante la creación de una página web funcional y atractiva. Utilizando tecnologías como HTML, CSS, JavaScript y Bootstrap CSS, se crea una interfaz moderna y responsive que permite a los usuarios interactuar de manera efectiva con la plataforma.",
    link: "https://proyecto-final-talento-tech-rose.vercel.app/",
    github: "https://github.com/SASOPELANA/ProyectoFinal-TalentoTech",
    image: ImagenCarrito,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.BOOTSTRAP],
  },
  {
    title: " GamerTech Store: Tienda Virtual de PC Gamers ",
    description:
      "Este proyecto consiste en el desarrollo de una tienda virtual de PC Gamers utilizando HTML, CSS, JavaScript y Bootstrap. El objetivo principal es ofrecer una experiencia de usuario intuitiva y atractiva para explorar, personalizar y adquirir equipos de alto rendimiento diseñados para videojuegos.",
    link: "https://proyecto1-css-talento-tech.vercel.app/",
    github:
      "https://github.com/SASOPELANA/Proyecto1-CSS-TalentoTech?tab=readme-ov-file",
    image: ImagenCss,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.BOOTSTRAP],
  },
];
