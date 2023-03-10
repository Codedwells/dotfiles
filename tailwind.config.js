/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                Raleway: ['"Raleway"', 'sans-serif'],
                Ubuntu: ['Ubuntu', 'sans-serif'],
                sans: ['Poppins', 'sans-serif']
            }
        }
    },
    plugins: [require('tailwind-scrollbar-hide')]
};
