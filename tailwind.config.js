/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#197ec7',
        primaryContent: '#001452',
        primarySubcontent: '#0044ff',
        primaryBase: '#0048c3',
        primaryAccent: '#2a0c65',
        primaryBg: '#f6f6f6',
      },
    },
  },
  plugins: [],
}

