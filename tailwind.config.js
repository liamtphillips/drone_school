/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/starss.jpg')",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}