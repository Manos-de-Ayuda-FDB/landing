/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                custom: {
                    "primary": "#2A80FF",
                    "secondary": "#5233FF",
                    "accent": "#00DAAF",
                    "neutral": "#1D202F",
                    "base-100": "#EFEDF7",
                    "info": "#3F5DE4",
                    "success": "#29A397",
                    "warning": "#FBCC32",
                    "error": "#DD3145",
                },
            }
        ]
    }
}

