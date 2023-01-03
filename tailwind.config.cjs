/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "klikoo-secondary": {
          20: " #FCFCFF",
          80: "#F3F4FF",
        },
        "klikoo-primary": {
          60: "#989EFF",
          100: "#545DFF"
        }
      }
    },
  },
  plugins: [],
}
