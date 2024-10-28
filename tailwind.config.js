/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f8f9fa',
        text: '#343a40',
        accent: '#17a2b8',
      },
    },
  },
  plugins: [],
}
