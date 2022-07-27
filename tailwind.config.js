/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./src/**/*.{html,js}'],
=======
  content: [
    "./**/*.html",
    "./main.js",
    // ...
  ],
>>>>>>> 9918eadc6665d62647d5fc43c7b2a2ea97fe9288
  theme: {
    extend: {
      maxWidth:{
        "16":"16rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
