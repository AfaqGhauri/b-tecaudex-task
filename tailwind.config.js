/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greyColorOne: '#E5E8EB',
        greyColorTwo: '#E8EDF2',
        blackColorOne: '#0D141C',
        cyanColor: '#4D7399',
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
    },
  },
  plugins: [],
};
