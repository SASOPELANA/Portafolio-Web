/// <reference types="astro/client" />

// Permitir que ts permita importar archivos .astro

declare module "*.astro" {
  const Component: any;
  export default Component;
}
