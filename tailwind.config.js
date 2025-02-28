/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // ✅ App Router (for Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}",  // ✅ Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",  // ✅ Components directory
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ Add src directory if used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
