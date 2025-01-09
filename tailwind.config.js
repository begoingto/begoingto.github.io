/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'title': ['"Rubik Vinyl"','"Moulpali"', 'serif'],
                'base': ['"Unkempt"','"Moulpali"', 'serif'],
            },
        },
    },
    plugins: [],
}