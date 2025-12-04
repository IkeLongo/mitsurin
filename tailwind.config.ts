import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': {
          DEFAULT: '#8C101C',
          'dark': '#630710',
          'light': '#A31827', // if you want a lighter variant
        },
        'accent': '#D9AE5F',
        'accent-dark': '#BF8136',
        'black': '#0F0F0F',
        'black-txt': '#1D1D1D',
        'dark-gray': '#333333',
        'white': {
          50: '#FFFFFF',
          100: '#F8F8F8', 
          500: '#F3F3F5',  // your main red
          900: '#F2EFEB',
        },
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(180deg, #630710 0%, #8C101C 100%)',
        'do-custom-gradient': 'linear-gradient(170deg, #06407F 50.24%, #002145 153.54%)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;