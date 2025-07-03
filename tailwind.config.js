module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}