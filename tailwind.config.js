// Hotmart Product Theme
const tokens = require("@hotmart-org-ca/cosmos-tokens/dist/hotmart-product/base/json/web.json");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1700px'
    },
    colors: tokens.color,
    spacing: tokens.size.spacing,
    borderRadius: tokens.size.border.radius,
    borderWidth: tokens.size.border,
    boxShadow: tokens.shadow,
    fontFamily: tokens.font.family,
    fontSize: tokens.size.text,
    fontWeight: tokens.font.weight,
    lineHeight: tokens.font.line.height,
    letterSpacing: tokens.font.letter.spacing
  },
  plugins: [],
}

