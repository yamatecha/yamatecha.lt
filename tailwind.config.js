/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yamaha-red': '#dc2626',
        'yamaha-blue': '#1e40af',
        'yamaha-gray': '#6b7280',
        'yamaha-dark': '#111827',
      },
      fontFamily: {
        'play': ['Play', 'sans-serif'],
      },
      spacing: {
        'product-card': '300px',
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'yamaha': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'yamaha-hover': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        '700': '700ms',
        '500': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
}
