import { mtConfig } from '@material-tailwind/react';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // Centramos por defecto container, y agregamos padding por defecto en mobile
      // https://tailwindcss.com/docs/container#centering-by-default
      // https://tailwindcss.com/docs/container#adding-horizontal-padding
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },

  plugins: [
    mtConfig({
      // https://www.material-tailwind.com/docs/v3/react/theming
      // Objeto de configuracion de Material-Tailwind
      // Aca cambiariamos colores, fonts y radius
    }),
  ],
};
