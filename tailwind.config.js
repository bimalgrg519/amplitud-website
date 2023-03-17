/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    // pixels: {
    //   '1': '1px',
    //   '2': '2px',
    //   '5': '5px',
    //   '10': '10px',
    // },
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-test': ['Gilroy-Test', 'sans-serif'],
      },
  
      colors: {
        transparent : "transparent",
        primaryColor: "#f5f3f3",
        secondaryColor: "#6442ff",
        lightPurple: "#efebfe",
        colorText: "#565773",
        whiteText: "#ffffff",
        darkText: "#222339",
        lightGrayCube: "#EDEAFB",
        lightGray: "rgba(86, 87, 115, 0.35)",
        inputColor: "rgba(194, 196, 255, 0.5)",
        greenButton: "rgba(140, 213, 201, 0.75)",
        yellowButton: "rgba(255, 173, 68, 0.25);",
      },
    },
    // screens: {
    //   '2xl': {'max': '1535px'},
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': {'max': '1279px'},
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': {'max': '1023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }

    //   'sm': {'max': '639px'},
    //   // => @media (max-width: 639px) { ... }
    // },

  },
  plugins: [],
}
