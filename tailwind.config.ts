import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from './src/styles/colorsPalette';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    colors,
    extend: {
      fontFamily: {
        base: ['var(--font-base)', ...defaultTheme.fontFamily.sans]
      },
      minWidth: {
        content: 'max-content'
      }
    }
  }
} satisfies Config;

export default config;
