/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/public/noise.png')",
      },
      backgroundRepeat: {
        'repeat': 'repeat',
      },
      backgroundSize: {
        'noise-pattern': '100px 100px',  // Adjust the pattern size to your needs
      },
      opacity: {
        'opacity': '0.1',
      },
    },
  },
  plugins: [],
}

