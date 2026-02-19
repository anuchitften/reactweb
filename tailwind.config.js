/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#15b80f',
        primaryContent: '#05624c',
        primarySubcontent: '#0c9b7c',
        primaryBase: '#1c9472',
        primaryAccent: '#053f22',
        primaryBg: '#f6f6f6',
      },
    },
  },
  plugins: [],
}

