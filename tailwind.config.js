export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "768px",
        lg: "1024",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}