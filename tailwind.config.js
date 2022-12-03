/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Pretendard-Regular',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '50%': { width: '100%', marginLeft: '0%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
      },
      animation: {
        progress: 'progress 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
