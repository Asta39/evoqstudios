/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#0066cc",
          "blue-focus": "#0071e3",
          "blue-dark": "#2997ff",
          canvas: "#ffffff",
          parchment: "#f5f5f7",
          pearl: "#fafafc",
          tile1: "#272729",
          tile2: "#2a2a2c",
          tile3: "#252527",
          black: "#000000",
          ink: "#1d1d1f",
          muted80: "#333333",
          muted48: "#7a7a7a",
          muted: "#cccccc",
          hairline: "#e0e0e0",
          divider: "#f0f0f0"
        }
      },
      boxShadow: {
        'apple-product': '3px 5px 30px 0px rgba(0, 0, 0, 0.22)',
      },
      borderRadius: {
        'apple-sm': '8px',
        'apple-md': '11px',
        'apple-lg': '18px',
        'apple-pill': '9999px',
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro Display',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      },
      animation: {
        orbit: 'orbit calc(var(--duration, 20s)) linear infinite',
        'orbit-reverse': 'orbit-reverse calc(var(--duration, 20s)) linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius, 160px) * -1)) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateY(calc(var(--radius, 160px) * -1)) rotate(-360deg)',
          },
        },
        'orbit-reverse': {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius, 160px) * -1)) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg) translateY(calc(var(--radius, 160px) * -1)) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
