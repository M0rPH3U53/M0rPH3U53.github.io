/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fff4',
          100: '#dcfce7',
          500: '#00ff00',
          600: '#00cc00',
          700: '#00aa00',
          900: '#004d00',
        },
        secondary: {
          500: '#0066ff',
          600: '#0052cc',
        },
        dark: {
          50: '#999999',
          100: '#666666',
          200: '#333333',
          300: '#2a2a2a',
          400: '#1a1a1a',
          500: '#0a0a0a',
        },
        accent: {
          red: '#ff0066',
          yellow: '#ffff00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 20s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff00' },
        },
      },
      backgroundImage: {
        'matrix-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><g fill-opacity=\"0.03\"><circle fill=\"%2300ff00\" cx=\"30\" cy=\"30\" r=\"1\"/></g></svg>')",
      },
    },
  },
  plugins: [],
}