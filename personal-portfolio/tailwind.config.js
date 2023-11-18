/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "header_background": '#1b1b1b',
      "header_text": '#9C9C9C',
      "page_background": "#080808",
    },

  },
  plugins: [require('flowbite/plugin')]
}

