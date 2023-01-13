/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    screens: {
      'smallmobile': '320px',
      'mobile':'436px',
      'desktop': '468px',
    },
    fontFamily:{
      sans: ['Noto Sans KR', 'sans-serif'],
      jua: ['Jua', 'sans-serif'],
      dohyeon: ['Do Hyeon', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
