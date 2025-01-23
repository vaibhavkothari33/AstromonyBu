/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'rise': 'rise 5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rise: {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '0.3'
          },
          '50%': {
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(-100vh)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
}