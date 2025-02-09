import type { Config } from 'tailwindcss';
import baseConfig from '@dicedb/tailwind-config/base';

const config: Config = {
  ...baseConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Assistant: ['Assistant'],
      },
      colors: {
        primary: 'var(--background)',
        border: 'var(--border)',
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
        editor: 'var(--editor)',
        hover: 'var(--hover)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
