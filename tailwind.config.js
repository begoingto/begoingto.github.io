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
                'title': ['"Bungee Shade"','"Moulpali"', 'serif'],
                'title2': ['"Rubik Vinyl"','"Moulpali"', 'serif'],
                'base': ['"Fira Code"','"Kantumruy Pro"', 'serif'],
            },
            animation: {
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
            },
        },
    },
    plugins: [],
}