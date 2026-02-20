/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Navy blue
        secondary: '#f0f4f8', // Light gray
        accent: '#4f46e5', // Indigo
      },
    },
  },
  plugins: [],
}
