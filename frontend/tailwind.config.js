/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add any custom screen sizes here
        'xs': '320px', // Extra small screen
        'sm': '640px', // Small screen
        'md': '768px', // Medium screen
        'lg': '1024px', // Large screen
        'xl': '1280px', // Extra large screen
        '2xl': '1536px', // 2x extra large screen
      },
      backgroundImage: {
        'hero-background': "url('./assets/background.png')",
      }
    },
  },
  plugins: [],
};
