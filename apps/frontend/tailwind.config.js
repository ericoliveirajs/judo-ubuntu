const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'torii-black': '#121212',
        'ubuntu-gold': '#C8A145',
        'kimono-white': '#F9F8F4',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};