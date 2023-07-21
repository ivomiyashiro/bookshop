/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-alpha': {
          100: 'hsla(0,0%,100%,.06)',
          200: 'hsla(0,0%,100%,.09)',
          300: 'hsla(0,0%,100%,.13)',
          400: 'hsla(0,0%,100%,.17)',
          500: 'hsla(0,0%,100%,.24)',
          600: 'hsla(0,0%,100%,.51)',
          700: 'hsla(0,0%,100%,.54)',
        }
      }
    },
  },
  plugins: [],
};
