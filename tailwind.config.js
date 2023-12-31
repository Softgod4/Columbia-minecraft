/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '970px',
    },
    extend: {
      colors: {
        'greey': '#52525233',
        'light-orange': '#EFC7AB',
        'server': '#525252',
        'input-modal': '#383838'
      }
    },
  },
  plugins: [],
}