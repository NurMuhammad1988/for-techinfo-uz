/** @type {import('tailwindcss').Config} */
export default {
    //content shunday yozilishi tailwind shu farmatlarga moslashadi degani

    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
