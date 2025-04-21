/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './styles/**/*.{css}',   // ← ať JIT načte utility i z CSS
  ],
  theme: { extend: {} },
  plugins: [],
};
