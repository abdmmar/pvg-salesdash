/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': '280px 1fr 408px',
        'dashboard-cart': '2fr 1fr',
      },
      minWidth: {
        32: '128px'
      },
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
