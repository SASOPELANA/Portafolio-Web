import HtmlIcon from "../components/icons/Html.astro";
import CssIcon from "../components/icons/Css.astro";
import JsIcon from "../components/icons/Js.astro";
import BoostrapIcon from "../components/icons/BoostrapIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import TailwindIcon from "../components/icons/Tailwind.astro";
import TsIcon from "../components/icons/Ts.astro";
import MarkdownIcon from "../components/icons/Markdown.astro";

const TAGS = {
  HTML: {
    name: "HTML",
    class: "bg-[#E34F26] text-white font-bold",
    icon: HtmlIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#fff] text-[#663399] font-bold",
    icon: CssIcon,
  },
  JS: {
    name: "JavaScript",
    class: "bg-[#F7DF1E] text-black font-bold",
    icon: JsIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#7952b3] text-white font-bold",
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
    class: "bg-[#3178C6] text-white font-bold",
    icon: TsIcon,
  },
  MARKDOWN: {
    name: "Markdown",
    class: "bg-[#fff] text-black font-bold",
    icon: MarkdownIcon,
  },
};

import ImagenCss from "../../public/imagen/proyecto-css.webp";
import ImagenCarrito from "../../public/imagen/carrito.webp";
import ImagenBooks from "../../public/imagen/books.webp";
import ImagenLanding from "../../public/imagen/landing-motos.webp";

export const PROJECTS = [
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
