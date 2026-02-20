/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#c66a00',
        saffronDark: '#8a4500',
        bgWarm: '#fff9ef'
      },
      boxShadow: {
        warm: '0 10px 30px rgba(123, 70, 0, 0.12)'
      }
    }
  },
  plugins: []
};
