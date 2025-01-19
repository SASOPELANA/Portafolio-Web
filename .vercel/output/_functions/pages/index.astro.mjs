/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, e as renderComponent, f as renderSlot, g as createAstro, s as spreadAttributes } from '../chunks/astro/server_D7LVuje2.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center py-5 w-full lg:w-[1120px] mx-auto"> <span></span> <nav class="flex flex-row gap-x-10 opacity-80"> <a href="#top">Inicio</a> <a href="#experiencia">Experiencia</a> <a href="#proyectos">Proyectos</a> <a href="#sobre-mi">Sobre mi</a> <a href="/contactos">Contactos</a> </nav> </header>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/Header.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-20">Aqui esta footer</footer>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/Footer.astro", undefined);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/public/icons/portfolio.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/layouts/Layout.astro", undefined);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/Badge.astro", undefined);

const $$Astro$8 = createAstro();
const $$Linkendin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Linkendin;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/icons/Linkendin.astro", undefined);

const $$Astro$7 = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full bordder border-white/10 flex justify-center items-center gap-x-2
  py-1 px-2 md:py-2 md:px-4 bg-white/5
  text-xs lg:text-base
  hover:scale-110
  hover:bg-white/10
  transition"${spreadAttributes(Astro2.props)} target="_blank" rel="noopner noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/SocialPill.astro", undefined);

const $$Astro$6 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 250"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/icons/GitHub.astro", undefined);

const $$Astro$5 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/icons/Mail.astro", undefined);

const ImagenSope = new Proxy({"src":"/_astro/sergio.tLson7j4.jpeg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sergio/Escritorio/Portafolio-Web/public/imagen/sergio.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, date, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-200/80"> ${date} </time> <h3 class="text-lg font-semibold text-yellow-200 mt-2"> ${title} </h3> <p class="mb-4 text-base font-normal text-gray-200 text-pretty"> ${description} </p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
Saber mas...${" "} <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a>`}`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/ExperienceItem.astro", undefined);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      title: "Portafolio de Sergio - Desarrolador y Programador Web",
      date: "Enero 2025",
      description: "Portafolio Web desarrolado con tecnologias Astro.js y Tailwind CSS. Desarrollador Frontend y subido al hosting de gratuito de Vercel",
      link: "#"
    },
    {
      title: "Proyecto Carrito de Compras - Talento Tech",
      date: "Diciembre 2024",
      description: "El proyecto final del curso de desarrollo Front End brindado por Talento Tech busca aplicar los conocimientos adquiridos a lo largo del curso mediante la creaci\xF3n de una p\xE1gina web funcional y atractiva. Utilizando tecnolog\xEDas como HTML, CSS, JavaScript y Bootstrap CSS, se crea una interfaz moderna y responsive que permite a los usuarios interactuar de manera efectiva con la plataforma.",
      link: "https://proyecto-final-talento-tech-rose.vercel.app/"
    }
    /*
    {
      title: "Pagina ventas, marketing y SEO - Componentes de PC",
      date: "Septiembre 2024",
      description:
        "La página está diseñada con un enfoque moderno, centrado en ofrecer una experiencia de usuario atractiva y fácil de navegar para los entusiastas del gaming. Utiliza HTML para estructurar el contenido, CSS para el diseño visual, Bootstrap para garantizar la responsividad y JavaScript para agregar interactividad y dinamismo..",
      link: "https://proyecto1-css-talento-tech.vercel.app/",
      },
      */
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCE.map((experience) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/Experience.astro", undefined);

const $$Astro$2 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className} w-full mx-auto lg:w-[740px] pb-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/SectionContainer.astro", undefined);

const $$Astro$1 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/icons/Briefcase.astro", undefined);

const $$Astro = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/icons/Code.astro", undefined);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS = [
    {
      title: "Carrito de Compras / Shopping Cart",
      description: "El proyecto final del curso de desarrollo Front End brindado por Talento Tech busca aplicar los conocimientos adquiridos a lo largo del curso mediante la creaci\xF3n de una p\xE1gina web funcional y atractiva. Utilizando tecnolog\xEDas como HTML, CSS, JavaScript y Bootstrap CSS, se crea una interfaz moderna y responsive que permite a los usuarios interactuar de manera efectiva con la plataforma.",
      link: "https://proyecto-final-talento-tech-rose.vercel.app/",
      github: "https://github.com/SASOPELANA/ProyectoFinal-TalentoTech",
      image: "../../public/imagen/carrito.webp",
      tags: ["HTML", "CSS", "JavaScript", "Boostrap"]
    },
    {
      title: " GamerTech Store: Tienda Virtual de PC Gamers ",
      description: "Este proyecto consiste en el desarrollo de una tienda virtual de PC Gamers utilizando HTML, CSS, JavaScript y Bootstrap. El objetivo principal es ofrecer una experiencia de usuario intuitiva y atractiva para explorar, personalizar y adquirir equipos de alto rendimiento dise\xF1ados para videojuegos.",
      link: "https://proyecto2-css-talento-tech.vercel.app/",
      github: "https://github.com/SASOPELANA/Proyecto2-CSS-TalentoTech",
      image: "../../public/imagen/proyecto-css.webp",
      tags: ["HTML", "CSS", "JavaScript", "Boostrap"]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ title, description, tags, image }) => renderTemplate`${maybeRenderHead()}<article class="mb-8"><h3 class="text-2xl font-semibold text-yellow-200 mb-2">${title}</h3><p class="text-lg mb-4 text-pretty">${description}</p><ul>${tags.map((tag) => renderTemplate`<li>${tag}</li>`)}</ul><img class="rounded shadow-2xl shadow-white/10 "${addAttribute(image, "src")}${addAttribute(`Captura de pantalla del proyecto. ${title}`, "alt")}></article>`)}`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/components/Projects.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio de Sergio - Desarrolador y Programador Web", "description": "Contrata a SergioDev para crear tus aplicaciones web y contenido. Estudiante de la Tecnicatura Universitaria en Programaci\xF3n - UTN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-43 pb-32" }, { "default": ($$result3) => renderTemplate` <div class="flex md:justify-start justify-center items-center"> <img class="rounded-full size-12 mb-4"${addAttribute(ImagenSope.src, "src")} alt="sergio photo"> </div> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
Hola, soy Sergio <a href="https:www.linkedin.com/in/sergio-alejandro-sopelana-b756aa290" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </a> </h1> <h2 class="text-xl lg:text-2xl text-wrap max-w-[700px]"> <span class="text-red-200/90">
Estudiante de la Tecnicatura Universitaria en Programación - UTN.</span><span class="opacity-80"> Busco mi primer empleo como Frontend</span> -<span class="text-yellow-200/90">
Desarrollador Web</span>. De San Ramón de la Nueva Orán - Salta, Argentina 🇦🇷.<br> <span class="text-gray-400/90">
Apasionado por el desarrollo web, con ganas de aprender y crecer en el
          ámbito profesional.</span> </h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https:www.linkedin.com/in/sergio-alejandro-sopelana-b756aa290" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$Linkendin, { "class": "size-4 md:size-6" })}
LinkenIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/SASOPELANA" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHubIcon", $$GitHub, { "class": "size-4 md:size-6" })}
GitHub
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:sopekof@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GmailIcon", $$Mail, { "class": "size-4 md:size-6" })}
sopekof@gmail.com
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <section> <h2 class="text-3xl font-semibold mb-6 flex gap-3 items-center"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-7" })}
Experiencia en desarrollo web. Freelance.
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} </section> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <section> <h2 class="text-3xl font-semibold mb-6 flex gap-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} </section> ` })} </main> ` })}`;
}, "/home/sergio/Escritorio/Portafolio-Web/src/pages/index.astro", undefined);

const $$file = "/home/sergio/Escritorio/Portafolio-Web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
