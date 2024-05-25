/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#662671',
        'primary-light': '#5C218B',
        secondary: '#FFF8B7',
      },
      backgroundImage: {
        'login-bg': "url('./src/assets/login-bg.png')",
      },
    },
  },
  plugins: [],
};
