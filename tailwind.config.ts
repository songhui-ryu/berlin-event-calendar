import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
        fontFamily: {
            // ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
            sans: ['ui-sans-serif', 'system-ui'],

            // ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            serif: ['ui-serif', 'Georgia'],

            // ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            mono: ['Liberation Mono', 'monospace'],

            // // custom font
            // 'display': ['PlatinumSign', 'Liberation Mono']
        },
    },
    plugins: [],
};
export default config;
