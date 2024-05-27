import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "xsm": "480px",
        'sm-lg': '990px',
        'md-lg': '1280px',
        'x-lg': '1440px'
      },
      colors: {
        primaryBlue: '#282dad',
        primaryBlack: '#18192e'
      }
    },
  },
  plugins: [],
};
export default config;
