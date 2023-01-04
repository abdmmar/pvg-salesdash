/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dashboard': '[sidebar] 0.8fr [main] 4fr [profilebar] 1.3fr',
        'dashboard-cart': '[chart] 2fr [agent] 1fr',
        'dashboard-md': '[sidebar] min-content [main] 1fr [profilebar] 0',
        'dashboard-lg': '[sidebar] 0.4fr [main] 4fr [profilebar] 0'
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
