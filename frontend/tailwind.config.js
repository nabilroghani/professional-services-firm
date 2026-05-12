/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-gold":      "#C7A454",
        "brand-gold-deep": "#9E7D35",
        "brand-navy":      "#04152C",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans:    ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        // Dropdown panel open
        "fade-down": {
          "0%":   { opacity: "0", transform: "translateX(-50%) translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
        // Mobile drawer link stagger
        "slide-in": {
          "0%":   { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-down": "fade-down 0.2s ease both",
        "slide-in":  "slide-in 0.35s ease both",
      },
    },
  },
  plugins: [],
};
