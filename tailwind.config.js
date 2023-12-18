/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      main: "#a0c6b9"
    },
    fontSize: {
      xs:"16px",  
      s:"20px",  
      m:"28px",  
      l:"34px",  
      xl:"48px",  
      xxl:"70px",  
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [
  require('tailwindcss-filters'),
];

