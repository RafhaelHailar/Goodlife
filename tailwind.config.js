/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    colors: {
        "medium-gray": "#585555",
        "dark-gray": "#2B2B2B",
        "gray": "#585555",
        "black": "#000",
        "medium-black": "rgba(0,0,0,0.68)",
        "fading-black": "rgba(0,0,0,0.01)",
        "light-black": "rgba(0,0,0,0.40)",
        "light-gray": "rgba(0,0,0,0.25)",
        "slight-gray": "rgba(196,196,196,0.1)",
        "blue": "#00B4D8",
        "light-blue": "#1FD1F5",
        "light-white": "rgba(255,255,255,0.7)",
        "white": "#fff"
    },
    fontFamily: {
        "inter": ["Inter","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

